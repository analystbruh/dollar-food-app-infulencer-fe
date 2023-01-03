import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid-loc',
  templateUrl: './vid-grid-loc.component.html',
  styleUrls: ['./vid-grid-loc.component.css']
})
export class VidGridLocComponent implements OnInit {

  public videos = [
    //'https://www.tiktok.com/@surya.manurung/video/7174006605871074587?is_from_webapp=1&sender_device=pc',
    'https://www.youtube.com/embed/-01EQY_vALc',
    'https://www.youtube.com/embed/9y3dwMQ3UBM',
    'https://www.youtube.com/embed/9y3dwMQ3UBM',
    'https://www.youtube.com/embed/axk6TuQ_o5o'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
