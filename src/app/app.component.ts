import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Invest in Balearics - ADR Balears';

  constructor(translate: TranslateService) {
    translate.addLangs(['en-EN', 'es-ES',  'ca-ES']);
    translate.setDefaultLang('en-EN');
    translate.use('en-EN');
  }

}
