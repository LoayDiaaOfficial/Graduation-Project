import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EgyptStatsComponent } from './components/egypt-stats/egypt-stats.component';
import { CityStatsComponent } from './components/city-stats/city-stats.component';
import { NodeStatsComponent } from './components/node-stats/node-stats.component';
import { UiWrapperComponent } from './components/ui-wrapper/ui-wrapper.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EgyptStatsComponent,
    CityStatsComponent,
    NodeStatsComponent,
    UiWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
