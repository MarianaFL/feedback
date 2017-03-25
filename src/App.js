import React, { Component, PropTypes } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory, IndexRedirect, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import firebase from 'firebase';
import { Map } from 'immutable';

import actions from 'api/actions';
import apiReducers from 'api/reducers';
import sagas from 'api/sagas';
import FeedbackRouter from 'Router';

const config = {
  apiKey: "AIzaSyDQKQUn_0zS8KOPhUxMAjax8J0y1mUTBRs",
  authDomain: "react-course-project-744a5.firebaseapp.com",
  databaseURL: "https://react-course-project-744a5.firebaseio.com",
  storageBucket: "react-course-project-744a5.appspot.com",
  messagingSenderId: "678636752247"
};
firebase.initializeApp(config);
window.firebase = firebase;

class App extends Component {

  constructor(props) {
    super(props);
    const sagaMiddleware = createSagaMiddleware({
      onError: (error) => {
        //window.airbrake.notify(error);
      },
    });

    const middlewares = [
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ];
    const reducers = combineReducers({
      routing: routerReducer,
      ...apiReducers
    });
    this.store = createStore(reducers, compose(applyMiddleware(...middlewares)));
    this.history = syncHistoryWithStore(browserHistory, this.store);

    sagaMiddleware.run(sagas);
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(payload => {
      this.store.dispatch({ type: actions.user.logged, payload });
    });
  }

  render() {

    const validate = (nextState, replace, callback) => {
      const { auth } = this.store.getState();
      const email = auth.getIn(['user', 'email']);
      const { location: { pathname: payload } } = nextState;
      if (!email) {
        this.store.dispatch({ payload, type: actions.user.navigation });
      }
      callback();
    }

    return (
      <Provider store={this.store}>
        <FeedbackRouter history={this.history} />
      </Provider>
    );
  }
}

export default App;
