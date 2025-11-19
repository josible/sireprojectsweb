import { Routes } from '@angular/router';
import { JoinGroupComponent } from './join-group/join-group.component';
import { HomeComponent } from './home/home.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  {
    path: 'join/:groupId',
    component: JoinGroupComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'privacidad',
    component: PrivacyComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

