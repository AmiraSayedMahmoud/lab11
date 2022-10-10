import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './component/Footer/footer.component';
import { HeaderComponent } from './component/Header/header.component';
import { ProductComponent } from './component/Main/Product/product.component';
import { MainComponent } from './component/Main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TransformPipe } from './pipes/transform.pipe';


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
    TransformPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
