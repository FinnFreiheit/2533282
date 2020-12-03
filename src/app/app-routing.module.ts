import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WeatherCompComponent} from './weather-comp/weather-comp.component';
import {ChartComponent} from './chart/chart.component';
import {CoverComponent} from './cover/cover.component';
import {WikiComponent} from './wiki/wiki.component';

const routes: Routes = [
  { path: 'wetter', component: WeatherCompComponent },
  { path: 'aktie', component: ChartComponent },
  { path: 'cover', component: CoverComponent},
  { path: 'wiki', component: WikiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
