import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityStatsComponent } from './components/city-stats/city-stats.component';
import { EgyptStatsComponent } from './components/egypt-stats/egypt-stats.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NodeStatsComponent } from './components/node-stats/node-stats.component';
import { UiWrapperComponent } from './components/ui-wrapper/ui-wrapper.component';

const routes: Routes = [
 {
   path:'',
   component:UiWrapperComponent,
   children:[
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path:'home',
      component:HomePageComponent
    },{
      path:'egypt',
      component:EgyptStatsComponent
  },{
    path:'city',
    component:CityStatsComponent,
  },{
    path:'node',
    component:NodeStatsComponent
  }
   ]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
