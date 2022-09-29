import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity, ActivityPageDescription } from '../shared/common.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  public getActivity(type: string): Observable<Activity> {
    console.log('** ActivityService');
    if(type=='random'){
      return this.httpClient.get<Activity>('https://www.boredapi.com/api/activity/');
    }else{
      return this.httpClient.get<Activity>(`https://www.boredapi.com/api/activity?type=${type}`);
    }
  }

}
