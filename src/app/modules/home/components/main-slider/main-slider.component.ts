import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MainSliderComponent {
  customOptions: any = {
    loop: true,
    items: 1,
    autoplay: true,
    nav: false,
    autoplayTimeout: 2000,
    dots: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
