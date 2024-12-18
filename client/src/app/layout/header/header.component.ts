import { Component } from '@angular/core';
import { SearchComponent } from "../../shared/search-component/search.component";

@Component({
  selector: 'app-header',
  imports: [SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
