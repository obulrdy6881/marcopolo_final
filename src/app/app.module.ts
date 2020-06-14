import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

 
// import { MatCardModule } from '@angular/material/card';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';
// import { MatChipsModule } from '@angular/material/chips';
// import { CdkStepperModule } from '@angular/cdk/stepper';
// // import {MatHorizontalStepper, MatStep, MatStepper, MatVerticalStepper} from '@angular/material';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';



import { HttpClientModule, HttpClient } from '@angular/common/http';
//Services
;

///////////MDB/////////////////
import {
  MDBBootstrapModule,
  ButtonsModule,
  BadgeModule,
  BreadcrumbModule,
  //  CardsFreeModule,
  CarouselModule,
  ChartsModule,
  CheckboxModule,
  CollapseModule,
  DropdownModule,
  IconsModule,
  InputsModule,
  InputUtilitiesModule,
  ModalModule,
  NavbarModule,
  PopoverModule,
  TableModule,
  TooltipModule,
  WavesModule,
} from 'angular-bootstrap-md';
/////////////MDB//////////////////


// //Start material
// import { A11yModule } from '@angular/cdk/a11y';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { PortalModule } from '@angular/cdk/portal';
//import { ScrollingModule } from '@angular/cdk/scrolling';
// import { CdkStepperModule } from '@angular/cdk/stepper';
// import { CdkTableModule } from '@angular/cdk/table';
// import { CdkTreeModule } from '@angular/cdk/tree';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
// import { MatButtonModule } from '@angular/material/button';
// import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatStepperModule } from '@angular/material/stepper';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialogModule } from '@angular/material/dialog';
// import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatInputModule } from '@angular/material/input';
// import { MatListModule } from '@angular/material/list';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
 import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTableModule } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatTreeModule } from '@angular/material/tree';
//// end material

// our Modules //

import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { CompanyPageComponent } from './company-page/company-page.component';
import { ContactusPageComponent } from './contactus-page/contactus-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { TilesPageComponent } from './tiles-page/tiles-page.component';
import { NewsBlogComponent } from './news-blog/news-blog.component';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { TypesPageComponent } from './types-page/types-page.component';
import { CeoMessageComponent } from './ceo-message/ceo-message.component';
import { ProductsComponent } from './products/products.component';
import { DashBoardModule } from './dash-board/dash-board.module';
import { GalleryComponent } from './gallery/gallery.component';
import { FloorTilesComponent } from './floor-tiles/floor-tiles.component';
import { BlogTwoComponent } from './blog-two/blog-two.component';


@NgModule({
  declarations: [
    AppComponent,
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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
DashBoardModule,
    // MDB start =============
    MDBBootstrapModule.forRoot(),
    BadgeModule,
    BreadcrumbModule,
    ButtonsModule,
    // CardsFreeModule,
    CarouselModule.forRoot(),
    ChartsModule,
    CheckboxModule,
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    IconsModule,
    InputsModule.forRoot(),
    InputUtilitiesModule,
    ModalModule.forRoot(),
    NavbarModule,
    PopoverModule.forRoot(),
    TableModule,
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
    // MDB end=============
    ////start material
    //  A11yModule,
    //  CdkStepperModule,
    //  CdkTableModule,
    //  CdkTreeModule,
    //  DragDropModule,
    //  MatAutocompleteModule,
    //  MatBadgeModule,
    //  MatBottomSheetModule,
    //  MatButtonModule,
    //  MatButtonToggleModule,
    //  MatCardModule,
    //  MatCheckboxModule,
    //  MatChipsModule,
    //  MatStepperModule,
    //  MatDatepickerModule,
    //  MatDialogModule,
    //  MatDividerModule,
    //  MatGridListModule,
    //  MatIconModule,
    //  MatInputModule,
    //  MatListModule,
    //  MatMenuModule,
    //  MatNativeDateModule,
    //  MatPaginatorModule,
     //MatProgressBarModule,
    //  MatProgressSpinnerModule,
    //  MatRadioModule,
    //  MatRippleModule,
    //  MatSelectModule,
      MatSidenavModule,
    //  MatSliderModule,
    //  MatSlideToggleModule,
    //  MatSnackBarModule,
    //  MatSortModule,
    //  MatTableModule,
    //  MatTabsModule,
    //  MatToolbarModule,
    //  MatTooltipModule,
    //  MatTreeModule,
    //  PortalModule,
    //// end materiali

  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
