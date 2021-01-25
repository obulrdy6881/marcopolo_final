import { HomeComponent } from './home/home.component';
import { DashboradComponent } from './dashborad/dashborad.component';
import { AddTilesComponent } from './add-tiles/add-tiles.component';
import { ViewTilesComponent } from './view-tiles/view-tiles.component';


export const Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            {
                path: "add-tile",
                component: AddTilesComponent
            },
            {
                path: "view-tiles",
                component: ViewTilesComponent
            },
           
            
        ]
    }
  
    

]