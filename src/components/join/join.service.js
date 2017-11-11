import axios from 'axios';
import { Observable } from 'rxjs/Rx';

export default class {
  static join(newUser) {
    const promise = axios.post('api/v1/user/save', newUser);
    return Observable.fromPromise(promise);
  }
}
