import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public featuredShorts = [
    {
      videoLink: 'https://www.youtube.com/embed/rObsbSSLaSo',
      thumb: '/assets/LemonPepperWings.gif',
      dish: 'Pork with Garlic Sauce',
      price: 22,
      deliveryLink:'https://buy.stripe.com/eVacOabbG2hQeoEfZ1',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/influencer3.png',
      influencerHandle: 'angus.reviews.food',
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
      thumb: '/assets/orangechicken.gif',
      dish: 'Orange Chicken Lunch Special',
      price: 15,
      deliveryLink:'https://buy.stripe.com/cN29BY93ye0ydkA3cg',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/christiana.png',
      influencerHandle: 'christianatherealtor',
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
      videoLink: 'https://www.youtube.com/embed/Ou2AHkXMJ78',
      thumb: '/assets/Tacos.gif',
      dish: 'Mexican Al Pastor Tacos (Pork)',
      price: 14,
      deliveryLink:'https://buy.stripe.com/28o01o1B61dM0xOdR6',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/Influencer4.jpg',
      influencerHandle: 'msthearysinn',
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
      videoLink: 'https://www.youtube.com/embed/5YK6DnL_OkI',
      thumb: '/assets/CheeseFries.gif',
      dish: 'Steak Fries',
      price: 22,
      deliveryLink:'https://buy.stripe.com/4gwcOa4Nig8G4O4eVb',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/IMG_1659.jpg',
      influencerHandle: 'vibewithmarcy',
      foodPic: 'assets/IMG_3282.jpg',
      buttons: [
        {
          label: 'Beef Bulgogi Cheese Fries',
          color: 'white',
          fontColor: 'black',
          price: 17,
          link: 'https://buy.stripe.com/4gwcOa4Nig8G4O4eVb'
        },
        {
          label: 'Spicy Fried Chicken Cupbob',
          color: 'white',
          fontColor: 'black',
          price: 17,
          link: 'https://buy.stripe.com/dR629wa7C6y6bcseVc'
        },
      ]
    },
    {
      videoLink: 'https://www.youtube.com/embed/L9LJm0PA55o',
      thumb: '/assets/cuminlamb.gif',
      dish: 'Pork with Garlic Sauce',
      price: 22,
      deliveryLink:'https://buy.stripe.com/eVacOabbG2hQeoEfZ1',
      pickupLink: 'https://buy.stripe.com/14kdSebbG5u21BS4gg',
      tipLink: 'https://buy.stripe.com/9AQ7tQbbGg8G80g4gi',
      influencerPic: 'assets/IMG_1659.jpg',
      influencerHandle: 'stevecasino',
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
        }
      ]
    }
  ].map(obj => {
    let autoplay = '?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=1&autoplay=1';
    return {
      videoLink: this.sanitize(`${obj.videoLink}${autoplay}`),
      showMe: false,
      thumb: obj.thumb,
      dish: obj.dish,
      price: obj.price,
      deliveryLink: this.sanitize(obj.deliveryLink),
      pickupLink: this.sanitize(obj.pickupLink),
      tipLink: this.sanitize(obj.tipLink),
      influencerPic: obj.influencerPic,
      influencerHandle: obj.influencerHandle,
      foodPic: obj.foodPic,
      buttons: obj.buttons
    }
  })

  constructor(
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit(): void {
    window.addEventListener("scroll", this.reveal);
    // To check the scroll position on page load
    this.reveal();
  }

  sanitize(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  reveal(): void {
    console.log('reveal');
    let reveals = document.querySelectorAll('.reveal');
    console.log(reveals);
    // let windowHeight: number;
    // let elementTop: number;
    // let elementVisible: number;
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 667;
      console.log('elementTop:', elementTop, 'windowHeight:', windowHeight, 'elementVisisble:', elementVisible);
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      }
    }
  }

}
