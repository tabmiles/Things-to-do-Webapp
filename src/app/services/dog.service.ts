import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) { }

  public getDog(){
    return this.httpClient.get('https://dog.ceo/api/breeds/image/random');
  }

  public getDogByBreed (breed: string){
    return this.httpClient.get(`https://dog.ceo/api/breed/${breed}/images/random`);
  }

}
