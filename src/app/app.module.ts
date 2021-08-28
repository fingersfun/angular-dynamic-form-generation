import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// dynamic form builder

import { FormBuilderModule } from './components/form-builder/form-builder.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule , ReactiveFormsModule, FormBuilderModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
