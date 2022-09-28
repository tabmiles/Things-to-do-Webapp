import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { Activity, ActivityType, DialogHeaders } from '../shared/common.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogModalComponent } from '../shared/dialog-modal/dialog-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit, OnDestroy {
  activityType = ActivityType;
  subscriber = Subscription.EMPTY ;

  constructor(private activityService: ActivityService, public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log('** Activity: ngOnInit');
  }

  getActivity(type: string){
    this.activityService.getActivity(type).subscribe((data) => {
      this.openDialog(data);
    });
  }

  openDialog(data: Activity) {
    this.dialog.open(DialogModalComponent, {
      data: {
        title: `${data.type} ${DialogHeaders.ACTIVITY}`,
        content: [data.activity],
        subcontent: null,
        image: null
      }
    });
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
