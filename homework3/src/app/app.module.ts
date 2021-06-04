import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './products.service';










@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ScrollToTopComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    FontAwesomeModule

  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
