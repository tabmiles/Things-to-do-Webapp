import { Component, OnInit, OnDestroy } from '@angular/core';
import { DogService } from '../services/dog.service';
import { DialogHeaders, Dog, DogType } from '../shared/common.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../shared/dialog-modal/dialog-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit, OnDestroy {
  dogType = DogType;
  subscriber = Subscription.EMPTY ;
  ngForNoOrder () {return 0;}

  constructor(private dogService: DogService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('** Dog: ngOnInit');
  }

  getDog(breedFilter: boolean, breed: string){
    if (breedFilter) {
      this.dogService.getDogByBreed(breed).subscribe((data) => {
        this.openDialog(data, breed);
      });
    }else {
      this.dogService.getDog().subscribe((data) => {
        this.openDialog(data, '');
      });
    }
  }

  openDialog(data: Dog, breed: string) {
    if(breed){
      this.dialog.open(DialogModalComponent, {
        data: {
          title: breed,
          content: null,
          subcontent: null,
          image: [data.message]
        }
      })
    }else{
      this.dialog.open(DialogModalComponent, {
        data: {
          title: DialogHeaders.DOG,
          content: null,
          subcontent: null,
          image: [data.message]
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
