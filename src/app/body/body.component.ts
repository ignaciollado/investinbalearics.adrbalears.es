import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  
  
  
  ngOnInit(): void {
    console.log ("Welcome to the Invest In Balearics platform from the ADR Balears")
  }
}
