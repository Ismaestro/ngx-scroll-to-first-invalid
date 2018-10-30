import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {NgxScrollToFirstInvalidModule} from "../../projects/ngx-scroll-to-first-invalid/src/ngx-scroll-to-first-invalid.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxScrollToFirstInvalidModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
