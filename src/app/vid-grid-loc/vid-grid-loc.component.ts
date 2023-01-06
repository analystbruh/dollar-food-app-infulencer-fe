import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid-loc',
  templateUrl: './vid-grid-loc.component.html',
  styleUrls: ['./vid-grid-loc.component.css']
})
export class VidGridLocComponent implements OnInit {

  public videos = [
    'https://www.youtube.com/embed/2FJORVxKdwE'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
