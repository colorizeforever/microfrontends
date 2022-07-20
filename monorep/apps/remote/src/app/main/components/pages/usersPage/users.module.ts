import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UsersComponent} from "./users.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {USERS_STATE_NAME} from "./state/users.selectors";
import {usersReducer} from "./state/users.reducer";
import {EffectsModule} from "@ngrx/effects";
import {UsersEffects} from "./state/users.effects";
import {MatPaginatorModule} from "@angular/material/paginator";
import {UsersService} from "./users.service";
import {StoreModule} from "@ngrx/store";
import {UsersSandbox} from "./state/users.sandbox";
import {SharedModule} from "../../../../shared/shared.module";

const routes: Routes = [
  {path: '', component: UsersComponent}
]

@NgModule({
  declarations: [
    UsersComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(USERS_STATE_NAME, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    MatPaginatorModule,
  ],
  providers: [UsersService, UsersSandbox]
})


export class UsersModule { }
