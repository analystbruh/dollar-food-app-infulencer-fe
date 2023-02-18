import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 animations: [
    trigger('fadeLeft', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)'})),
      transition('void => *', animate(1000)),
    ]),
  ],
})
export class HomeComponent implements OnInit {

  public featuredShorts = [
    {
      videoLink: 'https://www.youtube.com/embed/Ou2AHkXMJ78?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1',
      thumb: '/assets/chicken-tacos-thumb.png',
      dish: 'Mexican Al Pastor Tacos (Pork)',
      price: 14,
      deliveryLink:'https://buy.stripe.com/28o01o1B61dM0xOdR6',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/Influencer4.jpg',
      foodPic: 'assets/orangechicken.png',
      buttons: [
        {
          label: 'Al Pastor Tacos (Pork) x3',
          color: 'white',
          fontColor: 'black',
          price: 14,
          link: 'https://buy.stripe.com/28o01o1B61dM0xOdR6'
        },
        {
          label: 'Carne Asada Tacos (Beef) x3',
          color: 'white',
          fontColor: 'black',
          price: 14,
          link: 'https://buy.stripe.com/00g9BY0x26y64O47sH'
        },
        {
          label: 'Pollo Tacos (Chicken) x3',
          color: 'white',
          fontColor: 'black',
          price: 14,
          link: 'https://buy.stripe.com/4gw9BYa7C9Ki6Wc4gu'
        },
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/rObsbSSLaSo',
      thumb: '/assets/chicken-tacos-thumb.png',
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
          color: 'white',
          fontColor: 'black',
          price: 16,
          link: 'https://buy.stripe.com/cN229wenSg8G94kbIT'
        },
        {
          label: 'Lemon Pepper Chicken Wings',
          color: 'white',
          fontColor: 'black',
          price: 20,
          link: 'https://buy.stripe.com/8wM8xUgw0g8GcgwbIS'
        },
        {
          label: 'Classic Burger & Wings',
          color: 'white',
          fontColor: 'black',
          price: 37,
          link: 'https://buy.stripe.com/aEU01obbG5u25S85kx'
        }
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/V3-Kq0RSzE8',
      thumb: '/assets/chicken-tacos-thumb.png',
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
          color: 'white',
          fontColor: 'black',
          price: 15,
          link: 'https://buy.stripe.com/cN29BY93ye0ydkA3cg'
        },
        {
          label: 'Eggplant with Garlic Sauce',
          color: 'white',
          fontColor: 'black',
          price: 18,
          link: 'https://buy.stripe.com/dR68xU0x27CadkA9AH'
        },
        {
          label: 'Dumplings w/ Chili Sauce',
          color: 'white',
          fontColor: 'black',
          price: 13,
          link: 'https://buy.stripe.com/bIY8xU7Zu1dMa8o9AG'
        }
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/L9LJm0PA55o',
      thumb: '/assets/chicken-tacos-thumb.png',
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
          color: 'white',
          fontColor: 'black',
          price: 22,
          link: 'https://buy.stripe.com/eVacOabbG2hQeoEfZ1'
        },
        {
          label: 'Cumin Lamb',
          color: 'white',
          fontColor: 'black',
          price: 22,
          link: 'https://buy.stripe.com/7sIdSeenS1dM94kfZ3'
        },
        {
          label: 'Dinner Special: Pork + Lamb',
          color: 'white',
          fontColor: 'black',
          price: 45,
          link: 'https://buy.stripe.com/28o6pMdjOf4C3K0aEN'
        },
      ]
    }
  ].map(obj => {return {
    videoLink: this.sanitize(obj.videoLink),
    thumb: obj.thumb,
    dish: obj.dish,
    price: obj.price,
    deliveryLink: this.sanitize(obj.deliveryLink),
    pickupLink: this.sanitize(obj.pickupLink),
    tipLink: this.sanitize(obj.tipLink),
    influencerPic: obj.influencerPic,
    foodPic: obj.foodPic,
    buttons: obj.buttons
  }})

  constructor(
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit(): void {
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  playGame(): void {
    console.log('gonna play the game!');
  }



}
