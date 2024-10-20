import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileMatchComponent } from './profile-match/profile-match.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile-match',
        component: ProfileMatchComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: '',
        redirectTo: 'profile-match',
        pathMatch: 'full',
      },
    ],
  },
];
