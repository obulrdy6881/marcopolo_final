import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { TilesPageComponent } from './tiles-page/tiles-page.component';
import { NewsBlogComponent } from './news-blog/news-blog.component';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypesPageComponent } from './types-page/types-page.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FloorTilesComponent } from './floor-tiles/floor-tiles.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
      {path:"",component:AppComponent,
      children:[
       {path: "", component: HomePageComponent},
       {path:"company",component:CompanyPageComponent},
      {path:"contact",component:ContactusPageComponent},
      {path:"calculator",component:CalculatorPageComponent},
      {path:"tiles-page",component:TilesPageComponent},
      {path:"news",component:NewsBlogComponent},
      {path:"blog",component:BlogComponent},
      {path:"hh",component:HeaderComponent},
      {path:"types",component:TypesPageComponent},
      {path:"ceo-message",component:CeoMessageComponent},
      {path:"products",component:ProductsComponent},
      {path:"gallery",component:GalleryComponent},
      {path:"floor-tiles",component:FloorTilesComponent},
      {path:"blog-two",component:BlogTwoComponent}
    
]
  }
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
