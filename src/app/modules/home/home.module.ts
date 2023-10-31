import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurWorksComponent } from './components/our-works/our-works.component';
import { ClientsSaysComponent } from './components/clients-says/clients-says.component';
import { RecentBlogComponent } from './components/recent-blog/recent-blog.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainSliderComponent,
    AboutUsComponent,
    OurWorksComponent,
    ClientsSaysComponent,
    RecentBlogComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
