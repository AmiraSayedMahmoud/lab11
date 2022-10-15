import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http'
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
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoComponent } from './component/todo/todo.component';
import { CteatTodoComponent } from './component/cteat-todo/cteat-todo.component';


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
    FormatPipe,
    TodoListComponent,
    TodoComponent,
    CteatTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
