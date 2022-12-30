import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  public videos = [
    'https://www.tiktok.com/@surya.manurung/video/7174006605871074587?is_from_webapp=1&sender_device=pc',
    'https://youtube.com/embed/-01EQY_vALc',
    'https://www.youtube.com/embed/9y3dwMQ3UBM',
    'https://www.youtube.com/embed/axk6TuQ_o5o'
  ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  public video = this.s.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/iIzi90-MG9c');

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

}
