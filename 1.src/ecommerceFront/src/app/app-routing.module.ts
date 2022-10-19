import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    // canActivate: [AppAuthGuard],
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layouts/layouts.module').then(
        (m) => m.LayoutsModule
      ),
  },
  {path: '**', redirectTo: '404'},
  {path: '404', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
