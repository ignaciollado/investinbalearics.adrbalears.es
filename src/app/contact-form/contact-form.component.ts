import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  contactForm: FormGroup

  constructor(private formBuilder: FormBuilder) { }

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
    console.log(this.contactForm.value)
    this.contactForm.reset();
  }


}
