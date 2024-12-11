import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService} from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  imports: [ TranslateModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'crm-cat-memes';

  translate: TranslateService = inject(TranslateService);

  constructor() {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // Carga el idioma por defecto
  }

  translateText(lang: string){
    this.translate.use(lang);
  }

}
