import { Routes } from '@angular/router';
import { UserComponent } from './components/users/users.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'users', component: UserComponent },
  { path: '', redirectTo: '/users', pathMatch: 'full' } // default route
];

