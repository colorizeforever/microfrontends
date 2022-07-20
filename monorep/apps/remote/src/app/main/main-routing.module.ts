import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/mainComponents/main.component";
import {DashboardComponent} from "./components/pages/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: '', component: MainComponent,
        children: [
          {
            path: 'dashboard', component: DashboardComponent,
          },
          {
            path: 'users',
            loadChildren: () => import('./components/pages/usersPage/users.module')
              .then(m => m.UsersModule)
          }
        ]
      }
    ]
  }
  ]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
