import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FilterComponent } from './filter.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  entryComponents: [FilterComponent],
  declarations: [FilterComponent],
  exports: [FilterComponent]
})
export class FilterComponentModule {}
