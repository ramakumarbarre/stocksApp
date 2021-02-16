import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/users';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  constructor(
    private http: HttpClient) { }

    getUser(email: string): Observable<User> {
      return this.http.get<User>(`${this.userUrl}/?email=${email}`);
    }



    register(user) {
      return  new Observable(observer => {
              localStorage.setItem('currentUser', JSON.stringify(user));
              observer.next(localStorage.getItem('currentUser'))
        });
  }
}
