import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  public shorts = [
    'https://www.youtube.com/embed/2FJORVxKdwE',
    'https://www.youtube.com/embed/iJqayQ1mEqg'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  public videos = [
    'https://www.youtube.com/embed/9y3dwMQ3UBM'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
