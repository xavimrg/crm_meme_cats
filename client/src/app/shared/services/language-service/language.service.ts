import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private translate = inject(TranslateService)

  constructor() {
    const webLanguage = this.translate.getBrowserLang() || 'en'; /// la proiedad translate usa el metodo obtener el idioma, que es "alguno" o ingles, || si el primero es falso voy a por el segundo
    this.translate.setDefaultLang(webLanguage);
    this.translate.use(webLanguage)

  }


    // cambia el idioma, de translate service, se usa translate  y su metodo usar lenguage de tipo string. 
  changeLanguage(lang: string){
    this.translate.use(lang)
  }


// obtener el idioma que toca
getCurrentLanguage():string{
return this.translate.currentLang
}



}
