import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
