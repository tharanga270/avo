import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-clients-says',
  templateUrl: './clients-says.component.html',
  styleUrls: ['./clients-says.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ClientsSaysComponent {
  footerSlider: any = {
    center: true,
    loop: true,
    items: 1,
    margin: 30,
    stagePadding: 0,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
}
