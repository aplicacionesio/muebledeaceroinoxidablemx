import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ConfigService {
  // define our class properties. apiUrl is what we need
  // usually you could get this from an environment file
  apiUrl = 'https://us-central1-muebledeaceroinoxidablemx.cloudfunctions.net/enviarMail';
  // apiUrl = 'http://hmedia.mx/sendgrid/mail.php';
  headers = new HttpHeaders();
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      'Access-Control-Allow-Origin' : '*', 
      'Access-Control-Allow-Methods' : 'GET, POST, PATCH, PUT, DELETE, OPTIONS', 
      'Access-Control-Allow-Headers' : 'Origin, Content-Type, X-Auth-Token'
    })
  };


  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {
  }
  

   // return what comes back from this http call
   aenviarFormulario(campos) {
    // return this.http.post(this.apiUrl, campos, this.httpOptions);
    return this.http.post(this.apiUrl, campos, { responseType: 'text'});
  }

  
}