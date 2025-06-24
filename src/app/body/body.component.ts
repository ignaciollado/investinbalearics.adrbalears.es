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
  homeIntroPage: number
  homeIntroPage_1: number
  homeDetailPage_1: number
  homeIntroPage_2: number
  homeDetailPage_2: number
  homeIntroPage_3: number
  homeDetailPage_3: number
  homeIntroPage_4: number
  homeDetailPage_4: number
  homeIntroPage_5: number
  homeDetailPage_5: number

  animationDone: boolean = false
  currentLang: string
  currentWPLang: number

  constructor(  
    private wpPage: wpPageService,
    private sharedService: SharedService ) { }

  ngOnInit(): void {
    this.currentLang = localStorage.getItem('preferredLang')
    switch (this.currentLang) {
        case 'cat':
        case 'ca-ES':
          this.currentWPLang = 42
          this.homeIntroPage = 349
          this.homeIntroPage_1 = 992 /* 319 */
          this.homeDetailPage_1 = 319
          this.homeIntroPage_2 = 994 /* 357 */
          this.homeDetailPage_2 = 357
          this.homeIntroPage_3 = 997 /* 359 */
          this.homeDetailPage_3 = 359
          this.homeIntroPage_4 = 999 /* 366 */
          this.homeDetailPage_4 = 366
          this.homeIntroPage_5 = 1001 /* 308 */
          this.homeDetailPage_5 = 308 
          this.welcomeString = "Benvingut a la plataforma Invest In Balerics de la ADR Balears"
          break
        case 'es':
        case 'es-ES':
          this.currentWPLang = 43
          this.homeIntroPage = 105
          this.homeIntroPage_1 = 976  /* 401 */
          this.homeDetailPage_1 = 401
          this.homeIntroPage_2 = 982  /* 109 */
          this.homeDetailPage_2 = 109
          this.homeIntroPage_3 = 984  /* 111 */
          this.homeDetailPage_3 = 111
          this.homeIntroPage_4 = 987  /* 113 */
          this.homeDetailPage_4 = 113
          this.homeIntroPage_5 = 989  /* 115 */
          this.homeDetailPage_5 = 115
          this.welcomeString = "Bienvenido a la plataforma Invest In Balerics de la ADR Baleares"
          break
        case 'en':
        case 'en-EN':
          this.currentWPLang = 44
          this.homeIntroPage = 351
          this.homeIntroPage_1 = 1003 /* 321 */
          this.homeDetailPage_1 = 321
          this.homeIntroPage_2 = 1005 /* 355 */
          this.homeDetailPage_2 = 355
          this.homeIntroPage_3 = 1007 /* 361 */
          this.homeDetailPage_3 = 361
          this.homeIntroPage_4 = 1010 /* 364 */
          this.homeDetailPage_4 = 364
          this.homeIntroPage_5 = 1012 /* 310 */
          this.homeDetailPage_5 = 310
          this.welcomeString = "Welcome to the Invest In Balearics platform from the ADR Balears"
          break
        default:
          this.currentWPLang = 44
          this.homeIntroPage = 351
          this.homeIntroPage_1 = 1003 /* 321 */
          this.homeDetailPage_1 = 321
          this.homeIntroPage_2 = 1005 /* 355 */
          this.homeDetailPage_2 = 355
          this.homeIntroPage_3 = 1007 /* 361 */
          this.homeDetailPage_3 = 361
          this.homeIntroPage_4 = 1010 /* 364 */
          this.homeDetailPage_4 = 364
          this.homeIntroPage_5 = 1012 /* 310 */
          this.homeDetailPage_5 = 310
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

