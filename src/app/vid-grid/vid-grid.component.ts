import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface CardData {
  videoLink: SafeResourceUrl;
  showMe: boolean;
  thumb: string;
  dish: string;
  price: number;
  deliveryLink: SafeResourceUrl;
  pickupLink: SafeResourceUrl;
  tipLink: SafeResourceUrl;
  influencerPic: SafeResourceUrl;
  influencerHandle: string;
  foodPic: SafeResourceUrl;
  buttons: any[];
}


@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  @Input() shorts!: CardData[];

  constructor(public s: DomSanitizer) { }

  public videoNum!: number;


  ngOnInit(): void {
    window.addEventListener('scroll', this.reveal);
    window.onload = this.reveal;
  }

  sanitize(url: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(url);
  }

  playVid(thumbID: string, short: any): void {
    let thumb = document.getElementById(thumbID) as HTMLDivElement;
    thumb.style.display = 'none';
    short.showMe = true;
  }

  reveal(): void {
    let videos = document.querySelectorAll('.reveal');
    videos.forEach(video => {
      let windowHeight = window.innerHeight;
      let elementTop = video.getBoundingClientRect().top;
      let elementVisible = 10;
      if (elementTop < windowHeight - elementVisible) {
        video.classList.add('active');
      }
    })
  }

}
