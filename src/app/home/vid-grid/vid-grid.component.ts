import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid',
  templateUrl: './vid-grid.component.html',
  styleUrls: ['./vid-grid.component.css']
})
export class VidGridComponent implements OnInit {

  public shorts = [
    {
      videoLink: 'https://www.youtube.com/embed/2FJORVxKdwE',
      dish: 'Crazy Skewers',
      price: 21,
      deliveryLink: 'https://buy.stripe.com/test_aEU7tif2g7oK2OI9AD',
      pickupLink: 'https://buy.stripe.com/test_28o00Q3jy5gCgFy5ko',
      tipLink: 'https://buy.stripe.com/test_4gw00Q07mbF0ahaeUW',
      influencerPic: 'assets/IMG_1659.jpg',
      foodPic: 'assets/skewers.png'
    },
    {
      videoLink: 'https://www.youtube.com/embed/iJqayQ1mEqg',
      dish: 'Pork with Garlic',
      price: 15,
      deliveryLink:'https://buy.stripe.com/test_28o8xm7zO6kGgFyeUU',
      pickupLink: 'https://buy.stripe.com/test_8wM4h6f2g9wSgFyaEF',
      tipLink: 'https://buy.stripe.com/test_4gw00Q07mbF0ahaeUW',
      influencerPic: 'assets/IMG_1659.jpg',
      foodPic: 'assets/IMG_3282.jpg'
    }
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

  // public videos = [
  //   'https://www.youtube.com/embed/9y3dwMQ3UBM'
  // ].map(v => this.s.bypassSecurityTrustResourceUrl(v))

  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitize(url: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(url)
  }

}
