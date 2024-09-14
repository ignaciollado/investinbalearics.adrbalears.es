import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {
  
  pageXOffset:number =  window.pageXOffset
  offsetHeight:number =  document.body.offsetHeight
  innerHeight: number =  window.innerHeight
  mybutton = document.getElementById("myBtn");

  constructor() {
    window.onscroll = function() {this.scrollFunction()};
  }

  ngOnInit(): void {

    console.log ("Welcome to the Invest In Balearics platform from the ADR Balears")


    const square = document.querySelector('.square');
square.classList.remove('square-transition');

// Create the observer, same as before:
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      square.classList.add('square-transition');
      return;
    }

    square.classList.remove('square-transition');
  });
});

observer.observe(document.querySelector('.square-wrapper'));
  }

topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    this.mybutton.style.display = "block";
  } else {
    this.mybutton.style.display = "none";
  }
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

