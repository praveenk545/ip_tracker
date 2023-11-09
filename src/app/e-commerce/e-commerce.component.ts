import { Component } from '@angular/core';
import {} from '@fortawesome/fontawesome-svg-core';
import { faShop, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css'],
})
export class ECommerceComponent {
  icons = { faShop, faCartShopping };

  clickCount = 0;

  click() {
    if (this.clickCount < 10) {
      this.clickCount++;
    }
  }
  clickout() {
    if (this.clickCount) {
      this.clickCount--;
    }
  }
}
