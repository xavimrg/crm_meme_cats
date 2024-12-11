import { Component } from '@angular/core';
import { ProductComponent } from "../../products/product.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-layout',
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
