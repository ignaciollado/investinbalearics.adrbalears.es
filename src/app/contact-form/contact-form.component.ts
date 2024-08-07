import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms'
import { genericMailDTO } from '../Models/generic-data.dto';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  contactForm: FormGroup
  formData: genericMailDTO
  submitted: boolean = false
  
  constructor(private formBuilder: FormBuilder, private sendMail: MessageService) { 
    this.formData = new genericMailDTO('', '', '', '', '')
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      contactName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      theQuestion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      acceptTerms: [false, [Validators.required]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true
    this.formData = this.contactForm.value
    this.sendMail.sendMail(this.formData, `M'agradaria que em contactessin per a rebre assessorament per Invest In Balearics`, '')
    .subscribe((sendMailResult:any) => {
      console.log ("La respuesta: ", sendMailResult.status, sendMailResult.statusText)
      this.submitted = false
      this.contactForm.reset()
    })
  }


}
