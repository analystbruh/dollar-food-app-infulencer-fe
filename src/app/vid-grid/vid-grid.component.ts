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

  }

  sanitize(url: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(url)
  }

  playVid(thumbID: string, short: any): void {
    let thumb = document.getElementById(thumbID) as HTMLDivElement;
    thumb.style.display = 'none';
    short.showMe = true;
  }

}
