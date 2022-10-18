import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NuevoPageRoutingModule } from './nuevo-routing.module';

import { NuevoPage } from './nuevo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    IonicModule,
    NuevoPageRoutingModule
  ],
  declarations: [NuevoPage]
})
export class NuevoPageModule {}
