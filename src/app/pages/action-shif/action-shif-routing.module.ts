import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionShifPage } from './action-shif.page';

const routes: Routes = [
  {
    path: '',
    component: ActionShifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionShifPageRoutingModule {}
