import { Component } from '@angular/core';
import { wpPageService } from '../services/wp-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../services/shared.service';
import { WpPage } from '../Models/wp-page-data.dto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  welcomeString:string = ""
  wpPages: WpPage[] = []
  homeIntroPage: number = 351
  homeIntroPage_1: number = 317
  homeIntroPage_2: number = 355
  homeIntroPage_3: number = 361
  homeIntroPage_4: number = 364
  homeIntroPage_5: number = 310

  animationDone: boolean = false
  currentLang: string
  currentWPLang: number

  constructor(  
    private wpPage: wpPageService,
    private sharedService: SharedService ) { }

ngOnInit(): void {
    this.currentLang = localStorage.getItem('preferredLang')
    switch (this.currentLang) {
        case 'ca-ES':
          this.currentWPLang = 42
          this.homeIntroPage = 349
          this.homeIntroPage_1 = 315
          this.homeIntroPage_2 = 357
          this.homeIntroPage_3 = 359
          this.homeIntroPage_4 = 366
          this.homeIntroPage_5 = 308
          this.welcomeString = "Benvingut a la plataforma Invest In Balerics de la ADR Balears"
        break
        case 'es-ES':
          this.currentWPLang = 43
          this.homeIntroPage = 105
          this.homeIntroPage_1 = 212
          this.homeIntroPage_2 = 109
          this.homeIntroPage_3 = 111
          this.homeIntroPage_4 = 113
          this.homeIntroPage_5 = 115
          this.welcomeString = "Bienvenido a la plataforma Invest In Balerics de la ADR Baleares"
        break
        case 'en-EN':
          this.currentWPLang = 44
          this.homeIntroPage = 351
          this.homeIntroPage_1 = 317
          this.homeIntroPage_2 = 355
          this.homeIntroPage_3 = 361
          this.homeIntroPage_4 = 364
          this.homeIntroPage_5 = 310
          this.welcomeString = "Welcome to the Invest In Balearics platform from the ADR Balears"
        break
        default:
          this.currentWPLang = 44
          this.homeIntroPage = 351
          this.homeIntroPage_1 = 317
          this.homeIntroPage_2 = 355
          this.homeIntroPage_3 = 361
          this.homeIntroPage_4 = 364
          this.homeIntroPage_5 = 310
      }
    console.log (this.welcomeString)
    this.loadPages()
}

private loadPages(): void {
  let errorResponse: any
  let actionDone: string = ""
  let responseOK: boolean = false
  this.wpPage.getAll()
  .pipe(
    finalize(async () => {
      await this.sharedService.managementToast(
        'postFeedback',
        responseOK,
        errorResponse, actionDone
      )
    })
  )
  .subscribe(
      (requests: WpPage[]) => {
        this.wpPages = requests
        responseOK = true
        actionDone = "Data listed"
      },
      (error: HttpErrorResponse) => {
        if ( error.message.includes('Http failure during parsing for') ) {
          responseOK = false
          actionDone = "No data found ..."
        }
        finalize(async () => {
          await this.sharedService.managementToast( 'postFeedback', responseOK, error )
        })
      }
    );
}

topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

}

