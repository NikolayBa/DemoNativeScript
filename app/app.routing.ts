import { LoginComponent } from "./pages/login/login.component";
import { MainscreenComponent } from './pages/mainscreen/mainscreen.component';

export const routes = [
  { path: "", component: LoginComponent },
  { path: "mainscreen", component: MainscreenComponent }
];

export const navigatableComponents = [
  LoginComponent,
  MainscreenComponent
];