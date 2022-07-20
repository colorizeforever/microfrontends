import {NgModule} from "@angular/core";
import {MainComponent} from "./components/mainComponents/main.component";
import {MainRoutingModule} from "./main-routing.module";
import {HeaderComponent} from "./components/header/header.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    MatIconModule,
    SharedModule,
  ],
})

export class MainModule {}
