import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { Activity, ActivityType } from '../shared/common.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  currentActivity: Activity = {};
  activityType = ActivityType;

  constructor(private activityService: ActivityService) { }

  ngOnInit(): void {
    console.log('** Activity: ngOnInit');
  }

  getActivity(type: string){
    this.activityService.getActivity(type).subscribe((data) => {
      console.log(data);
      this.currentActivity = data;
    });
  }

  getActivityByType(typeData: any){
    console.log('** get activity by', typeData.value);
  }

  clearDialog(){
    this.currentActivity = {};
  }

}
