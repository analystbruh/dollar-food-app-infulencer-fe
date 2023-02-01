import { Component, OnInit } from '@angular/core';
// import { SocialAuthService } from "@abacritt/angularx-social-login";
// import { GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent implements OnInit {
  constructor(
    // private auth: SocialAuthService
    ) { }

  public disabled = false;
  public showMe = false;
  private accessToken = '';
  private user!: SocialUser;
  // public loggedIn!: boolean;


  ngOnInit(): void {
    // this.auth.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   this.showMe = this.loggedIn;
    //   console.log(this.showMe, this.loggedIn)
    // });
  }

  // getAccessToken(): void {
  //   this.auth.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => {
  //     this.accessToken = accessToken
  //     console.log(this.accessToken);
  //   });
  // }

  // signOut(): void {
  //   this.auth.signOut();
  // }

  freeSpin(bottle: HTMLDivElement) {
    let pick = Math.round((Math.random() * 4) + 2)
    // let pick = 1;
    bottle.className = `spin${pick}`;
    this.disabled = true;
  }
}
