import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { DogComponent } from './dog/dog.component';
import { HomeComponent } from './home/home.component';
import { JokeComponent } from './joke/joke.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'activity',
    component: ActivityComponent,
  },
  {
    path: 'joke',
    component: JokeComponent,
  },
  {
    path: 'dog',
    component: DogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
