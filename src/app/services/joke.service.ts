import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private httpClient: HttpClient) { }

  public getJoke(type: string, length: string | null) {
    if(length){
      return this.httpClient.get(`https://v2.jokeapi.dev/joke/${type}?type=${length}`);
    }else{
      return this.httpClient.get(`https://v2.jokeapi.dev/joke/${type}`);
    }
  }
}
