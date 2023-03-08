/* All Imports */
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export abstract class SanitasService {
  protected readonly URL: string;
  
  protected constructor(protected http: HttpClient, entity?: string, tail: string = 'api/autogen/') {
    this.URL = environment.BASE_URL + tail;
  }


  /* For Created API Url */
  public getApiURL($tail: string) {
    return environment.BASE_URL + $tail + (environment.production ? '' : ($tail.indexOf('?') === -1 ? '' : ''));
  }

}