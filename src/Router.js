import React, { PropTypes } from 'react';
import { IndexRedirect, Router, Route } from 'react-router';
import Base from 'components/Base';
import Login from 'components/user/Login';
import Register from 'components/user/Register';
import ChangePassword from 'components/user/ChangePassword';
import Invites from 'components/invites'
import myFeedback from 'components/myFeedback';
import Invites from 'components/invites';


const FeedbackRouter = ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/change_password" component={ChangePassword} />
      <Route path="/" component={Base}>
        <IndexRedirect to="/myfeedback" />
        <Route path="/myfeedback" component={myFeedback} />
        <Route path="/invites" component={Invites} />
      </Route>


    </Router>
  )
}

export default FeedbackRouter;
