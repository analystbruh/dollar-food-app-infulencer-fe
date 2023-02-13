import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(100%)' })),
      transition('void => *', animate(1000)),
    ]),
  ],
})
export class Footer2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

