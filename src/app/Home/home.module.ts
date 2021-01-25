import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { CommonExportModule } from '../customExports/commonModules.module'

import { Routes } from './homeRouts';

import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { TilesPageComponent } from './tiles-page/tiles-page.component';
import { NewsBlogComponent } from './news-blog/news-blog.component';
import { HeaderComponent } from './header/header.component';
import { TypesPageComponent } from './types-page/types-page.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ProductsComponent } from './products/products.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FloorTilesComponent } from './floor-tiles/floor-tiles.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { LandingComponent } from './landing/landing.component';

import { BlogComponent } from './blog/blog.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';
import { IdcBlogComponent } from './blogs/idc-blog/idc-blog.component';
@NgModule({
    declarations: [
        LandingComponent,
        HomePageComponent,
        FooterComponent,
        CompanyPageComponent,
        ContactusPageComponent,
        NavbarComponent,
        CalculatorPageComponent,
        TilesPageComponent,
        NewsBlogComponent,
        BlogComponent,
        HeaderComponent,
        TypesPageComponent,
        CeoMessageComponent,
        ProductsComponent,
        GalleryComponent,
        FloorTilesComponent,
        BlogTwoComponent,
        ProductDescriptionComponent,
        IdcBlogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommonExportModule,
        RouterModule.forChild(Routes),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule { }
