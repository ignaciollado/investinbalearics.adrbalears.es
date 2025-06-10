import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, UntypedFormControl } from '@angular/forms'
import { genericMailDTO } from '../Models/generic-data.dto';
import { MessageService } from '../services/message.service';
import { CountriesDTO } from '../Models/countries.dto';
import { CountriesService } from '../services/countries.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})

export class ContactFormComponent {
  contactForm: FormGroup
  contactName: UntypedFormControl
  contactEmail: UntypedFormControl
  corporation: UntypedFormControl
  country: UntypedFormControl
  contactPhone: UntypedFormControl
  body: UntypedFormControl
  acceptTerms: UntypedFormControl

  formData: genericMailDTO
  submitted: boolean = false
  currentLang: string
  currentWPLang: number
  countries: CountriesDTO[] = [];
  groupedCountries: { letter: string; countries: CountriesDTO[] }[] = [];

  constructor(private formBuilder: FormBuilder,
    private countriesService: CountriesService,
    private sendMail: MessageService) { 
    this.formData = new genericMailDTO('', '', '', '', '')
     this.getAllCountries()
  }

  ngOnInit() {
    this.currentLang = localStorage.getItem('preferredLang')
    this.contactForm = this.formBuilder.group({
      contactName:  ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.minLength(9), Validators.maxLength(9)]],
      corporation :['', [Validators.minLength(10), Validators.maxLength(250)]],
      country :['', [Validators.minLength(10), Validators.maxLength(250)]],
      body: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(250)]],
      acceptTerms: [false, [Validators.requiredTrue]]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  getAllCountries() {
    this.countriesService.getAll().subscribe((countries: CountriesDTO[]) => {
      const letterList: string[] = []
      this.countries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      this.countries = countries.map((country: CountriesDTO) => {
        country.name.common = country.name.common.replace(/Å/g, "A"); // Caso Aaland Islands
        if (!letterList.includes(country.name.common.charAt(0))) {
          letterList.push(country.name.common.charAt(0))
        }
        return country
      })
      this.groupedCountries = letterList.map((letter: string) => {
        return {
          letter: letter,
          countries: this.countries.filter((country: CountriesDTO) => country.name.common.charAt(0) === letter)
        }
      })
      console.log ("this.groupedCountries", this.groupedCountries)
    }, (error) => {
      console.log(error)
    })
  }

  onSubmit() {
    this.submitted = true
    this.formData = this.contactForm.value
    this.sendMail.sendMail(this.formData, "Consulta des-de Invest In Balearics:", 'Invest In Balearics')
    .subscribe((sendMailResult:any) => {
      console.log ("La respuesta: ", sendMailResult.status, sendMailResult.statusText)
      this.submitted = true
      this.contactForm.reset()
    })
  }

}
