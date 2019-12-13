import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {

  // private userUrl = 'http://localhost:8080/Controller';
  private basePath = '/Controller';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.basePath, {params : new HttpParams().set('action', 'Users')});
  }

}
