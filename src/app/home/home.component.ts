import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredShorts = [
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
      videoLink: 'https://www.youtube.com/embed/rObsbSSLaSo',
      dish: 'Pork with Garlic Sauce',
      price: 22,
      deliveryLink:'https://buy.stripe.com/eVacOabbG2hQeoEfZ1',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/influencer3.png',
      foodPic: 'assets/IMG_3282.jpg',
      buttons: [
        {
          label: 'Classic Tavern Burger',
          color: 'brown',
          fontColor: 'white',
          price: 16,
          link: 'https://buy.stripe.com/cN229wenSg8G94kbIT'
        },
        {
          label: 'Lemon Pepper Chicken Wings',
          color: 'darkgoldenrod',
          fontColor: 'white',
          price: 20,
          link: 'https://buy.stripe.com/8wM8xUgw0g8GcgwbIS'
        },
        {
          label: 'Classic Burger & Wings',
          color: 'blue',
          fontColor: 'white',
          price: 37,
          link: 'https://buy.stripe.com/aEU01obbG5u25S85kx'
        }
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/V3-Kq0RSzE8',
      dish: 'Orange Chicken Lunch Special',
      price: 15,
      deliveryLink:'https://buy.stripe.com/cN29BY93ye0ydkA3cg',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/christiana.png',
      foodPic: 'assets/orangechicken.png',
      buttons: [
        {
          label: 'Orange Chicken Lunch Special',
          color: 'orange',
          fontColor: 'black',
          price: 15,
          link: 'https://buy.stripe.com/cN29BY93ye0ydkA3cg'
        },
        {
          label: 'Eggplant with Garlic Sauce',
          color: 'purple',
          fontColor: 'white',
          price: 18,
          link: 'https://buy.stripe.com/dR68xU0x27CadkA9AH'
        },
        {
          label: 'Veggie Dumplings w/ Chili Sauce',
          color: 'white',
          fontColor: 'black',
          price: 13,
          link: 'https://buy.stripe.com/bIY8xU7Zu1dMa8o9AG'
        }
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/L9LJm0PA55o',
      dish: 'Pork with Garlic Sauce',
      price: 22,
      deliveryLink:'https://buy.stripe.com/eVacOabbG2hQeoEfZ1',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/IMG_1659.jpg',
      foodPic: 'assets/IMG_3282.jpg',
      buttons: [
        {
          label: 'Pork with Garlic Sauce',
          color: 'red',
          fontColor: 'white',
          price: 22,
          link: 'https://buy.stripe.com/eVacOabbG2hQeoEfZ1'
        },
        {
          label: 'Cumin Lamb',
          color: 'yellow',
          fontColor: 'black',
          price: 22,
          link: 'https://buy.stripe.com/7sIdSeenS1dM94kfZ3'
        },
        {
          label: 'Dinner Special: Pork + Lamb',
          color: 'blue',
          fontColor: 'white',
          price: 45,
          link: 'https://buy.stripe.com/28o6pMdjOf4C3K0aEN'
        },
      ]
    }
  ].map(obj => {return {
    videoLink: this.sanitize(obj.videoLink),
    dish: obj.dish,
    price: obj.price,
    deliveryLink: this.sanitize(obj.deliveryLink),
    pickupLink: this.sanitize(obj.pickupLink),
    tipLink: this.sanitize(obj.tipLink),
    influencerPic: obj.influencerPic,
    foodPic: obj.foodPic,
    buttons: obj.buttons
  }})

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
