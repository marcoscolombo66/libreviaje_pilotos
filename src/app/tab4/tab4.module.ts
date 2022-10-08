import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
