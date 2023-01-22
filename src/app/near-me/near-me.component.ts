import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.component.html',
  styleUrls: ['./near-me.component.css']
})
export class NearMeComponent implements OnInit {

    public shorts = [
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
    {
      videoLink: 'https://www.youtube.com/embed/iJqayQ1mEqg',
      dish: 'Pork with Garlic',
      price: 22,
      deliveryLink:'https://buy.stripe.com/eVacOabbG2hQeoEfZ1',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/IMG_1659.jpg',
      foodPic: 'assets/IMG_3282.jpg'
    },
    {
      videoLink: 'https://www.youtube.com/embed/iJqayQ1mEqg',
      dish: 'Pork with Garlic',
      price: 15,
      deliveryLink:'https://buy.stripe.com/cN29BY93ye0ydkA3cg',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/christiana.png',
      foodPic: 'assets/orangechicken.png'
    },
  ].map(obj => {return {
    videoLink: this.sanitize(obj.videoLink),
    dish: obj.dish,
    price: obj.price,
    deliveryLink: this.sanitize(obj.deliveryLink),
    pickupLink: this.sanitize(obj.pickupLink),
    tipLink: this.sanitize(obj.tipLink),
    influencerPic: obj.influencerPic,
    foodPic: obj.foodPic
  }})

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
