import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  
/*   pageXOffset:number =  window.pageXOffset
  offsetHeight:number =  document.body.offsetHeight
  innerHeight: number =  window.innerHeight */

  constructor() {}

  ngOnInit(): void {

    console.log ("Welcome to the Invest In Balearics platform from the ADR Balears")

/*     const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('.square');
        if (entry.isIntersecting) {
          square.classList.add('square-animation');
        return; 
        }
        square.classList.remove('square-animation');
      });
    });
    observer.observe(document.querySelector('.servicios')); */

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

