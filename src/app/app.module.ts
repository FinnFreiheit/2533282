import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherCompComponent } from './weather-comp/weather-comp.component';
import {RouterModule} from '@angular/router';
import {allAppRoutes} from './routes';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ApixuService} from './apixu.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { CoverComponent } from './cover/cover.component';
import { WikiComponent } from './wiki/wiki.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherCompComponent,
    HeaderComponent,
    FooterComponent,
    ChartComponent,
    CoverComponent,
    WikiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allAppRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
