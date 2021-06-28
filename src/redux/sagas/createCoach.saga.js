import { put } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
export default function* createCoach(action) {
  try {
    console.log(`IN createCoach Saga`);
    // passes the username and password from the payload to the server
    yield axios.post('/api/admin/create_coach', action.payload);
    yield put({ type: 'FETCH_COACH' });
  } catch (error) {
    yield put({ type: 'REGISTRATION_FAILED' });
  }
}
