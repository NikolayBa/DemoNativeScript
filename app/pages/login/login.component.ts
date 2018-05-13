import { Component, OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page"; 


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"],
})
export class LoginComponent {
  userche: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService) {
    this.userche = new User();
    this.userche.email = "nikolaynikolay";
    this.userche.password = "password";
  }
  
  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }
  login() {
    this.userService.login(this.userche)
    .subscribe(
      () => this.router.navigate(["/mainscreen"]),
      (error) => alert("Unfortunately we could not find your account.")
    );
  }
  signUp() {
    this.userService.register(this.userche)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        () => alert("Unfortunately we were unable to create your account.")
      );
  }
  
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
