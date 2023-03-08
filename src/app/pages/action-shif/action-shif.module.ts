import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionShifPageRoutingModule } from './action-shif-routing.module';

import { ActionShifPage } from './action-shif.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionShifPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActionShifPage]
})
export class ActionShifPageModule {}
