import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { CompanyPageComponent } from '../company-page/company-page.component';
import { TilesPageComponent } from '../tiles-page/tiles-page.component';
import { NewsBlogComponent } from '../news-blog/news-blog.component';
import { BlogComponent } from '../blog/blog.component';
import { TypesPageComponent } from '../types-page/types-page.component';
import { CeoMessageComponent } from '../ceo-message/ceo-message.component';
import { ProductsComponent } from '../products/products.component';
import { GalleryComponent } from '../gallery/gallery.component';

export const   Routes = [
    {path:"dashboard",component:DashboardHomeComponent,
    children:[{
    path:"company",component:CompanyPageComponent
    },
    {path:"tiles-page",component:TilesPageComponent},
    {path:"news",component:NewsBlogComponent},
    {path:"blog",component:BlogComponent},
    {path:"types",component:TypesPageComponent},
    {path:"ceo-message",component:CeoMessageComponent},
    {path:"products",component:ProductsComponent},
    {path:"gallery",component:GalleryComponent}]
}
   
]