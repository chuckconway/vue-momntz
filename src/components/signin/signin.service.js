import axios from 'axios';
import { Observable } from 'rxjs/Rx';

export default class {

  static signIn(credentials) {
    const promise = axios.post('api/v1/signin', credentials);
    return Observable.fromPromise(promise);
  }
}
