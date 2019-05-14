
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Headers, Request, RequestMethod, Response, ResponseContentType } from '@angular/http';
import { Generatekeypair, InquireKey } from '../model';

@Injectable()
export class PROCURETOPAYService {

  constructor(
    private http: Http
  ) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
  }


  private handleError(error: any) {
    let errorBody = JSON.parse(error._body);
    let errorMsg = errorBody.message;
    console.log('Error message: ', errorMsg);
    return throwError(errorMsg);
  };


//  ----------------------------------- Generate keypair --------------------------------------------------------
submitGeneratekeypair(model: Generatekeypair): Observable<any> {
  const url = environment.backendBaseUrl + 'generatekeypair'; // transaction.submit.service.request
  let headers = new Headers();
  this.createAuthorizationHeader(headers);
  return this.http.post(url, model, {
    headers: headers
  }).map((res: Response) => {
    return res.json();
  })
    .catch(this.handleError);
}
//  ----------------------------------- ------------------ --------------------------------------------------------

// --------------------------------------------- Check key -----------------------------------------------------------
InquireKey(model: InquireKey): Observable<any> {
  const url = environment.backendBaseUrl + 'Checkkey';//asset.service.request
  let headers = new Headers();
  this.createAuthorizationHeader(headers);
  return this.http.post(url ,model, {
    headers: headers
  }).map((res: Response) => {
    return res.json();
    // return res.json()[0];
  })
    .catch(this.handleError);
}
// -------------------------------------------------- End key -----------------------------------------------------------


}
