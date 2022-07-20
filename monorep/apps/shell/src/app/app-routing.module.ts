import { loadRemoteModule } from "@angular-architects/module-federation";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      type: 'module',
      exposedModule: './Module'
    })
      .then(m => m.MainModule),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
