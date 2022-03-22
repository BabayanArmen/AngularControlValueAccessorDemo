import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { CustomControlPageComponent } from './pages/custom-control-page/custom-control-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicChildComponentComponent } from './pages/dynamic-child-component/dynamic-child-component.component';
import {DialogModule} from "./modules/dialog/dialog.module";

@NgModule({
  declarations: [
    AppComponent,
    FormPageComponent,
    CustomControlPageComponent,
    DynamicChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
