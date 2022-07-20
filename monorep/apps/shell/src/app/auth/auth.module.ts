import {NgModule} from "@angular/core";
import {AuthRoutingModule} from "./auth-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInComponent} from "./signIn/signIn.component";
import { HttpClientModule } from "@angular/common/http";
import { SignUpComponent } from "./signup/signUp.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})

export class AuthModule {

}
