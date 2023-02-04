import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import { PlayTrackerService } from '../services/play-tracker.service';
import { last } from 'rxjs';


@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent implements OnInit {
  constructor(
    private auth: SocialAuthService,
    private pt: PlayTrackerService
  ) { }

  public disabled = false;
  public showMe = false;
  private user!: SocialUser;
  public loggedIn!: boolean;
  public label = '...';

  ngOnInit(): void {
    this.auth.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      if (this.loggedIn) {
        this.pt.getLastPlayDT(user?.id).subscribe((res: number) => {
          this.disabled = res > 0;
          this.label = res ? 'Try Again Later' : 'Free Spin!';
        });
      }
      this.showMe = this.loggedIn;
    });
  }

  signOut(): void {
    this.auth.signOut();
  }

  freeSpin(bottle: HTMLDivElement) {
    let pick = Math.round((Math.random() * 4) + 2)
    bottle.className = `spin${pick}`;
    this.pt.setLastPlayDT(this.user?.id).subscribe();
    this.disabled = true;
  }
}
