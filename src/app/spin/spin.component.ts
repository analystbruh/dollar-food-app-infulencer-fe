import { BasePortalOutlet } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent implements OnInit {
  public disabled = false;
  constructor() { }

  ngOnInit(): void {
  }

  freeSpin(bottle: HTMLDivElement) {
    let pick = Math.round((Math.random() * 4) + 2)
    // let pick = 1;
    bottle.className = `spin${pick}`;
    this.disabled = true;
  }
}
