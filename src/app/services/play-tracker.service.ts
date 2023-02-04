import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayTrackerService {

  constructor(private http: HttpClient) { }

  private endpointHost = 'http://127.0.0.1:5000'

  getLastPlayDT(user: string): Observable<any> {
    return this.http.post(`${this.endpointHost}/button-plays`, {user: user});
  }

  setLastPlayDT(user: string): Observable<any> {
    return this.http.post(`${this.endpointHost}/button-plays`, {user: user, trackplay: 'yes'});
  }
}
