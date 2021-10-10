import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Day10Component } from './day10/day10.component';
import { ToggleComponentD9 } from './day9/toggle.component';
import { Day9Component } from './day9/day9.component';
import { ToggleComponentD10 } from './day10/toggle.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Day9Component,
    ToggleComponentD9,
    Day10Component,
    ToggleComponentD10,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
