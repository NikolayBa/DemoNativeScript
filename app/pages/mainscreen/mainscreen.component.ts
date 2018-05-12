import { Component } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"],
})
export class MapsComponent {
  userche: User;
  isLoggingIn = true;
  isBluetoothConnected = false;
  

  constructor(private router: Router, private userService: UserService) {
    
  }
  
}
