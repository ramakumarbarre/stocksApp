import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User } from "../Model/User";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,private toastr: ToastrService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("currentUser")));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string) {
        return new Observable(observer=>{
               let users= JSON.parse(localStorage.getItem('currentUser'));
               if(users?.username ==username && users?.password ==password){
                observer.next(users);
                this.currentUserSubject.next(users);
                this.toastr.success("You have successfully loggedIn!!!");
               }else{
                this.toastr.error("Please register!!!");
               }

        })
            .pipe(map(user => {


                  return user;

            }));
    }

    logout() {
        // remove user from local storage to log user out

          this.toastr.success('Succfully logedout and deleted from local storage...!!!');
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
