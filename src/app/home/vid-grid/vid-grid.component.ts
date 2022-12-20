import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  public videos = [
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c',
    'https://www.youtube.com/embed/iIzi90-MG9c'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  public video = this.s.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iIzi90-MG9c');

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
