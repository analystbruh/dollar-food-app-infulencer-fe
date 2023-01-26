import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pic-grid',
  templateUrl: './pic-grid.component.html',
  styleUrls: ['./pic-grid.component.css']
})
export class PicGridComponent implements OnInit {

  public pics = [
    'orangechicken.png',
    'porklobsauce-big.png',
    'Eggplant.png',
    'Dumplings.png',
    'Lamb.png'
  ].map(pic=>`/assets/${pic}`);

  constructor() { }

  ngOnInit(): void {
  }

}
