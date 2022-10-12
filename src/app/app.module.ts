import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/Footer/footer.component';
import { HeaderComponent } from './component/Header/header.component';
import { ProductComponent } from './component/Main/CartChild/product.component';
import { MainComponent } from './component/Main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { ProductCardComponent } from './component/product-cardChild/product-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TransformPipe } from './pipe/pipes/transform.pipe';
import { OrderMasterComponent } from './component/Main/CartParent/order-master.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { DetailsComponentComponent } from './component/Main/details-component/details-component.component';
import { FormatPipe } from './pipe/format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    MainComponent,
    ProductCardDirective,
    ProductCardComponent,
    NavbarComponent,
    TransformPipe,
    OrderMasterComponent,
    HomeComponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    UserLoginComponent,
    DetailsComponentComponent,
    FormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
