import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { MessageService } from '../services/message.service';
import { wpPageService } from '../services/wp-page.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SharedService } from '../services/shared.service';
import { genericMailDTO } from '../Models/generic-data.dto';
import { WpPage } from '../Models/wp-page-data.dto';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  contactForm: FormGroup
  formData: genericMailDTO
  wpPages: WpPage[] = []
  submitted: boolean = false
  animationDone: boolean = false
  currentLang: string = "en-EN"

  constructor( private formBuilder: FormBuilder, private sendMail: MessageService, private wpPage: wpPageService,
    private sharedService: SharedService ) {
      this.formData = new genericMailDTO('', '', '', '', '')
    }

ngOnInit(): void {
    console.log ("Welcome to the Invest In Balearics platform from the ADR Balears")
    switch ( localStorage.getItem('preferredLang') ) {
      case 'ca-ES':
        this.currentLang = 'ca-ES'
      break
      case 'es-ES':
        this.currentLang = 'es-ES'      
      break
      case 'en-EN':
        this.currentLang = 'en-EN'
      break
      default:
        this.currentLang = 'ca-ES'
    }
    const observer = new IntersectionObserver(entries => {
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
    observer.observe(document.querySelector('.servicios'))
    this.contactForm = this.formBuilder.group({
      country:  [''],
      contactName:  ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: [''],
      corporation: [''],
      body: [''],
      acceptTerms: [false, [Validators.requiredTrue]]
    })

    this.loadPages()
}

get f(): { [key: string]: AbstractControl } {
  return this.contactForm.controls;
}

onSubmit() {
  let errorResponse: any
  let actionDone: string = ""
  let responseOK: boolean = false
  this.submitted = true
  this.formData = this.contactForm.value
  this.sendMail.sendMail(this.formData,this.formData.body,"Invest IN Balearics")
    .subscribe((sendMailResult:any) => {
    },
    (error: HttpErrorResponse) => {
      errorResponse = error;
      this.sharedService.errorLog(errorResponse);
      })
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
        console.log (this.wpPages)
        responseOK = true
        actionDone = "Data listed"
      },
      (error: HttpErrorResponse) => {
        if ( error.message.includes('Http failure during parsing for') ) {
          responseOK = false
          actionDone = "No data found to list"
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

