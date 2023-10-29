import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { HttpClientModule } from '@angular/common/http';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, MainSliderComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
