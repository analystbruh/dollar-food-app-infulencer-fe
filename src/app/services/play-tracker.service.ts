import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlayTrackerService {

  constructor(private http: HttpClient) { }

  getLastPlayDT(user: string): Observable<any> {
    return this.http.post(`${environment.host}/button-plays`, {user: user});
  }

  setLastPlayDT(user: string): Observable<any> {
    return this.http.post(`${environment.host}/button-plays`, {user: user, trackplay: 'yes'});
  }
}
