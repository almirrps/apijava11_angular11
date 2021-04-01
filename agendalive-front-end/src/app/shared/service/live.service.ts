import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  //Variável com chamada do back-end em execução
  apiUrl = 'http://localhost:8080/lives'; 

  //Para fazer as chamadas via requisição POST
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })

  };

  constructor(
    private httpclient: HttpClient
  ) { }

  public getLivesWithFlag(flag: String): Observable<ResponsePageable> {
    return this.httpclient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
  }

}
