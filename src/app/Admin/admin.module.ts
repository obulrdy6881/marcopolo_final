import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'

import { CommonExportModule } from '../customExports/commonModules.module'

import { Routes } from './adminRouts';

import { HomeComponent } from './home/home.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AddTilesComponent } from './add-tiles/add-tiles.component';
import { ViewTilesComponent } from './view-tiles/view-tiles.component';

@NgModule({
  declarations: [
    HomeComponent,
    DashboradComponent,
    AddTilesComponent,
    ViewTilesComponent,
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
export class AdminModule { }
