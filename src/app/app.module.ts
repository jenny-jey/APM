import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './Shared/convert-to-spaces.pipe';
import { StarComponent } from './Shared/star.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import {ProductDetailsGuard} from './products/product-details.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([{path:'products', component:ProductListComponent},
    {path: 'products/:id', canActivate:[ProductDetailsGuard], component:ProductDetailsComponent},
  {path:'welcome', component: WelcomeComponent},
{path:'', redirectTo:'welcome',pathMatch:'full'},
{path: '**', redirectTo:'welcome', pathMatch:'full'}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
