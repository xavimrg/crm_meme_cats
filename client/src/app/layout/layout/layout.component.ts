import { Component } from '@angular/core';
import { ProductComponent } from "../../products/product.component";

@Component({
  selector: 'app-layout',
  imports: [ProductComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
