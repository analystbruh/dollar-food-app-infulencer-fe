import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  public videos = [
    'https://www.youtube.com/embed/2FJORVxKdwE'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
