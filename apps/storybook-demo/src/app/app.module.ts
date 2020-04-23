import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import {UiModule} from "@storybook/ui";

@NgModule({
  declarations: [AppComponent, ButtonComponent],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
