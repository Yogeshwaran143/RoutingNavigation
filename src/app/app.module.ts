import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    ViewInvoiceComponent,
    CreateInvoiceComponent,
    UpdateInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
