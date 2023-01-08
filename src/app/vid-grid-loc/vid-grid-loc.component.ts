import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-vid-grid-loc',
  templateUrl: './vid-grid-loc.component.html',
  styleUrls: ['./vid-grid-loc.component.css']
})
export class VidGridLocComponent implements OnInit {

  public shorts = [
    {
      videoLink: 'https://www.youtube.com/embed/2FJORVxKdwE',
      dish: 'Crazy Skewers',
      price: 21,
      deliveryLink: 'https://buy.stripe.com/test_8wM9BCgFb1Zp45acMO',
      pickupLink: 'https://buy.stripe.com/test_eVaeVW74B9rR9pu9AA',
      tipLink: 'https://buy.stripe.com/test_eVa6pq9cJ33t7hm9AB',
      influencerPic: 'assets/m.PNG',
      foodPic: 'assets/burger.jpeg'
    },
    {
      videoLink: 'https://www.youtube.com/embed/iJqayQ1mEqg',
      dish: 'Cumin Lamb',
      price: 38,
      deliveryLink:'https://buy.stripe.com/test_8wM9BCgFb1Zp45acMO',
      pickupLink: 'https://buy.stripe.com/test_eVaeVW74B9rR9pu9AA',
      tipLink: 'https://buy.stripe.com/test_eVa6pq9cJ33t7hm9AB',
      influencerPic: 'assets/m2.PNG',
      foodPic: 'assets/seafood.jpg'
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


  constructor(public s: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitize(url: string): SafeResourceUrl {
    return this.s.bypassSecurityTrustResourceUrl(url)
  }

}
