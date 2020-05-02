import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from "ngx-bootstrap/modal";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgxMaskModule } from "ngx-mask";
import { ToastrModule } from "ngx-toastr";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import ptBr from "@angular/common/locales/pt";
import { LoaderModule } from './shared/loader/loader.module';

/**
 * Init Locale Date.
 */
registerLocaleData(ptBr);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LoaderModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
