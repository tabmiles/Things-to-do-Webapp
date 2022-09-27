import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog.service';
import { Dog, DogType } from '../shared/common.model';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  currentDog: Dog = {};
  dogType = DogType;
  ngForNoOrder () {return 0;}

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    console.log('** Dog: ngOnInit');
  }

  getDog(breedFilter: boolean, breed: string){
    if (breedFilter) {
      this.dogService.getDogByBreed(breed).subscribe((data) => {
        this.currentDog = data;
      });
    }else {
      this.dogService.getDog().subscribe((data) => {
        this.currentDog = data;
      });
    }
  }

  clearDialog(){
    this.currentDog = {};
  }

}
