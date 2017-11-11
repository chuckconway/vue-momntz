import axios from 'axios';
import { Observable } from 'rxjs/Rx';

export default class {
  static addPerson(person) {
    const promise = axios.post('api/v1/person', person);
    return Observable.fromPromise(promise);
  }
}
