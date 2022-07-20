import { ChangeDetectionStrategy, Component } from "@angular/core";
import {navBarElements} from "../../../constants/constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent  {
  navBarElems = navBarElements;
}
