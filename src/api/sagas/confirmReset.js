import { takeLatest } from 'redux-saga/effects';
import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import actions from 'api/actions';

function fetchFirebase(token, { password }) {
  return window.firebase.auth().confirmPasswordReset(token, password).then(function(){
  	    window.alert("Your password was succesfully reseted!")
  });
}

function* confirmReset() {
  try {
    const { auth } = yield select();
    const user = auth.getIn(['emailSignIn', 'default', 'form']);
    const { email, password } = user.toJS();
    yield call(fetchFirebase, "insira token aqui -q", { password });
    //yield put({ type: actions.user.logged, payload });
    yield put(push('/login'));
  } catch (payload) {
    yield put({ type: actions.user.resetFailure, payload });
  }

}

export default function* watchConfirmReset() {
  yield takeLatest(actions.user.confirmReset, confirmReset);
}