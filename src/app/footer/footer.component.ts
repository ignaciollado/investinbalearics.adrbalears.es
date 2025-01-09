import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentWPLang: number
  constructor() {}
 
  ngOnInit(): void {
    switch (localStorage.getItem('preferredLang')) {
      case 'ca-ES':
        this.currentWPLang = 42
        break
      case 'es-ES':
        this.currentWPLang = 43
        break
      case 'en-EN':
        this.currentWPLang = 44
        break
      default:
        this.currentWPLang = 43
      }
  }
}
