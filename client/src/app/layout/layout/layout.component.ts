import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ProductComponent } from '../../products/product/product.component';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, ProductComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
