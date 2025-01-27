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


  wpPages: WpPage[] = []
  homeIntroPage: number = 105

  animationDone: boolean = false
  currentLang: string = "en-EN"
  currentWPLang: number

  constructor(  
    private wpPage: wpPageService,
    private sharedService: SharedService ) { }

ngOnInit(): void {
    console.log ("Welcome to the Invest In Balearics platform from the ADR Balears")
    this.currentLang = localStorage.getItem('preferredLang')
    switch (this.currentLang) {
        case 'ca-ES':
          this.currentWPLang = 42
          this.homeIntroPage = 262
        break
        case 'es-ES':
          this.currentWPLang = 43
          this.homeIntroPage = 105
        break
        case 'en-EN':
          this.currentWPLang = 44
          this.homeIntroPage = 264
        break
        default:
          this.currentWPLang = 44
          this.homeIntroPage = 264
      }
/*     const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('.square');
        if (entry.isIntersecting && !this.animationDone) {
          square.classList.add('square-animation');
          this.animationDone = true
        return; 
        }
        square.classList.remove('square-animation');
      });
    });
    observer.observe(document.querySelector('.servicios')) */
    
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

