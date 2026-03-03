import { Routes } from '@angular/router';
import { UserComponent } from './components/users/users.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,  children: [
      { path: 'users', component: UserComponent },
      { path: 'about', component: TestComponent } // Child route
    ] },
  

  // wildcard must be last so it doesn't block other paths
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
