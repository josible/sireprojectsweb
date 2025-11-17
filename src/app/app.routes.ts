import { Routes } from '@angular/router';
import { JoinGroupComponent } from './join-group/join-group.component';
import { App } from './app';

export const routes: Routes = [
  {
    path: 'join/:groupId',
    component: JoinGroupComponent
  },
  {
    path: '',
    component: App
  },
  {
    path: '**',
    redirectTo: ''
  }
];

