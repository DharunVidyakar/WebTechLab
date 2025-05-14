import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WaterdataComponent } from './waterdata/waterdata.component';
import { AddWaterComponent } from './addwater/addwater.component';



export const routes: Routes = [
    { path: "",component: HomeComponent },
    { path: "waterData",component: WaterdataComponent},
    { path: "add",component: AddWaterComponent}
     
];
