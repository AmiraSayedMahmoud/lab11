import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { CteatTodoComponent } from './component/cteat-todo/cteat-todo.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { ProductComponent } from './component/Main/CartChild/product.component';
import { OrderMasterComponent } from './component/Main/CartParent/order-master.component';
import { DetailsComponentComponent } from './component/Main/details-component/details-component.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductCardComponent } from './component/product-cardChild/product-card.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoComponent } from './component/todo/todo.component';
import { UserLoginComponent } from './component/user-login/user-login.component';

const routes: Routes = [
{path: "", redirectTo:"/home", pathMatch: 'full'},
{path: "home", component:  HomeComponentComponent},
{path: "aboutUs", component: AboutUsComponent},
{path: "contactUs", component: ContactUsComponent},
{path: "product", component: ProductCardComponent},
{path: "product/:pid", component: DetailsComponentComponent},
{path: "todo", component: TodoListComponent},
{path: "todo/edit", component: TodoComponent},
{path: "todo/cteats", component:CteatTodoComponent},
{path: "order", component: OrderMasterComponent},
{path: "login", component:UserLoginComponent},
{path: "**", component: NotFoundComponent}
];

@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
