import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UpdateInvoiceComponent } from './update-invoice/update-invoice.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';

const routes: Routes = [ 
  { path: '', component: LoginPageComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'viewInvoice', component: ViewInvoiceComponent },
  { path: 'createInvoice', component: CreateInvoiceComponent },
  { path: 'updateInvoice', component: UpdateInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
