import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { ItemComponentModule } from '../item/item.module';
import { FilterComponentModule } from '../filter/filter.module';
import { FilterComponent } from '../filter/filter.component';

import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollingModule,
    ItemComponentModule,
    FilterComponentModule,
    HomePageRoutingModule
  ],
  entryComponents: [FilterComponent],
  declarations: [HomePage],
})
export class HomePageModule {}
