import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface CardData {
  videoLink: SafeResourceUrl;
  dish: string;
  price: number;
  deliveryLink: SafeResourceUrl;
  pickupLink: SafeResourceUrl;
  tipLink: SafeResourceUrl;
  influencerPic: SafeResourceUrl;
  foodPic: SafeResourceUrl;
}


@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {
  @Input() shorts!: CardData[];

  // public shorts: CardData[] = [
    // {
    //   videoLink: 'https://www.youtube.com/embed/2FJORVxKdwE',
    //   dish: 'Crazy Skewers',
    //   price: 21,
    //   deliveryLink: 'https://buy.stripe.com/test_aEU7tif2g7oK2OI9AD',
    //   pickupLink: 'https://buy.stripe.com/test_28o00Q3jy5gCgFy5ko',
    //   tipLink: 'https://buy.stripe.com/test_4gw00Q07mbF0ahaeUW',
    //   influencerPic: 'assets/IMG_1659.jpg',
    //   foodPic: 'assets/skewers.png'
    // },
    // {
    //   videoLink: 'https://www.youtube.com/embed/iJqayQ1mEqg',
    //   dish: 'Pork with Garlic',
    //   price: 2,
    //   deliveryLink:'https://buy.stripe.com/aEU15s93y7Ca6Wc9AB',
    //   pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
    //   tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
    //   influencerPic: 'assets/IMG_1659.jpg',
    //   foodPic: 'assets/IMG_3282.jpg'
    // }
  // ].map(obj => {return {
  //   videoLink: this.sanitize(obj.videoLink),
  //   dish: obj.dish,
  //   price: obj.price,
  //   deliveryLink: this.sanitize(obj.deliveryLink),
  //   pickupLink: this.sanitize(obj.pickupLink),
  //   tipLink: this.sanitize(obj.tipLink),
  //   influencerPic: obj.influencerPic,
  //   foodPic: obj.foodPic
  // }})


  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {

  }

  sanitize(url: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(url)
  }

}