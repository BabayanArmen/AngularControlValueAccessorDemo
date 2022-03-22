import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DynamicChildLoaderDirective} from './load-child.directive';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    DynamicChildLoaderDirective ,
    DialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
