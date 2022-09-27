import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { Joke, JokeLineLength, JokeType } from '../shared/common.model';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {
  currentJoke: Joke = {};
  jokeLength = JokeLineLength;
  jokeType = JokeType;

  constructor(private jokeService: JokeService) { }

  ngOnInit(): void {
    console.log('** Joke: ngOnInit');
  }

  getJoke(type: string, length: string | null){
    this.jokeService.getJoke(type, length).subscribe((data) => {
      this.currentJoke = data;
    });
  }

  clearDialog(){
    this.currentJoke = {};
  }

}
