import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';


const ROUTES: Routes = [
{path:'cart',component:CartComponent},
{path:'homepage',component:HomepageComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CartComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
	 FormsModule,
		RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
