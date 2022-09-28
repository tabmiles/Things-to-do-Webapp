import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokeService } from '../services/joke.service';
import { DialogHeaders, Joke, JokeLineLength, JokeType } from '../shared/common.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../shared/dialog-modal/dialog-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit, OnDestroy {
  jokeLength = JokeLineLength;
  jokeType = JokeType;
  subscriber = Subscription.EMPTY ;

  constructor(private jokeService: JokeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('** Joke: ngOnInit');
  }

  getJoke(type: string, length: string | null){
    this.subscriber = this.jokeService.getJoke(type, length).subscribe((data) => {
      this.openDialog(data);
    });
  }

  flagsToArray(flags: any){
    let flagArray: Array<string> = [];
    for(let key in flags){
      if(flags[key]){
        flagArray.push(key);
      }
    }
    return flagArray;
  }

  openDialog(data: Joke) {
    const flags = this.flagsToArray(data.flags);
    if(data.joke){
      this.dialog.open(DialogModalComponent, {
        data: {
          title: `${data.category}${DialogHeaders.JOKE}`,
          content: [data.joke],
          subcontent: flags,
          hasImage: false
        }
      });
    }else{
      this.dialog.open(DialogModalComponent, {
        data: {
          title: `${data.category}${DialogHeaders.JOKE}`,
          content: [data.setup, data.delivery],
          subcontent: flags,
          image: null
        }
      });
    }
  }

  ngOnDestroy(): void {
      this.subscriber.unsubscribe();
  }

}
