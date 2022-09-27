import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  public getActivity(type: string){
    if(type=='random'){
      return this.httpClient.get('http://www.boredapi.com/api/activity/');
    }else{
      console.log(`http://www.boredapi.com/api/activity?type=${type}`);
      return this.httpClient.get(`http://www.boredapi.com/api/activity?type=${type}`);
    }
    
  }

}
