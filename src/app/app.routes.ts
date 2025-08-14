import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';
import { Category } from './category/category';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'home',component:Home},
    {path:'dashboard',component:Dashboard},
    {path:'category',component:Category},
];
