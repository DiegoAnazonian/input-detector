import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputDetectorDirective } from './detector-directive/detector.directive';
import { CustomForm } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDetectorDirective,
    CustomForm
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
