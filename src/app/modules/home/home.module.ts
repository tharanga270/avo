import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, MainSliderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    //BrowserModule,
    //BrowserAnimationsModule,
  ],
})
export class HomeModule {}
