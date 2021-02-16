import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../service/AuthenticationService";
import { first } from 'rxjs/operators';
import { ToastrService } from "ngx-toastr";

@Component({
      selector:"login",
      templateUrl:"./login.component.html",
      styleUrls:["./login.component.css"]

})
export class LoginComponent{
      loginForm: any;
      loading = false;
    submitted = false;
    error = '';
    returnUrl: string;


      constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,private toastr: ToastrService){

      }

      ngOnInit() {


              this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
       // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/profile']);
        }

      }

      get f() {
            return this.loginForm.controls;
      }


      onSubmit(){
          this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {

                    this.router.navigate(['/stocks']);

                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
      }

}
