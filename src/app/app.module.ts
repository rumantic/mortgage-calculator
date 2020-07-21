import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {Ng5SliderModule} from 'ng5-slider';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,


    MatMomentDateModule,
    MatSliderModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
