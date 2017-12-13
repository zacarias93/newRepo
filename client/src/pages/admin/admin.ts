import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimeSheetService } from '../../service/timesheetService'
import { DB } from '../../db'
import { TimeSheet } from '../../model/timesheet';
import { User } from '../../model/user';
import { Job } from '../../model/job';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
  providers: [TimeSheetService, DB]
})
export class AdminPage {

  constructor(public navCtrl: NavController, private timeSheetService: TimeSheetService) {
    this.activeUser = DB.getActiveUser()
  }

  activeUser: User;
  timeSheets: TimeSheet[];
  selectedTimeSheet;
  message: string;

  ngOnInit() {
    this.initPage();
  }

  initPage() {
    var user = new User(1, 'z', 'pass', 'Zac', 'Lee', 99);
    var job = new Job(1, 'JPMC');
    var ts1 = new TimeSheet(user, job, '8');

    this.activeUser = DB.getActiveUser();
    this.selectedTimeSheet = ts1;
  }

  getTimeSheets() {

    this.message = ''

    this.activeUser = DB.getActiveUser();

    this.timeSheetService
      .getTimesheets()
      .subscribe((data) => this.handleTimeSheets(data))
  }

  handleTimeSheets(timeSheetArray: TimeSheet[]) {
    this.timeSheets = timeSheetArray
    console.log(this.timeSheets);
  }

  deleteTimeSheet(timeSheet: TimeSheet) {

    this.timeSheetService.deleteTimeSheet(timeSheet)
      .subscribe((data) => this.handleDeleteTimeSheet(data))


  }

  handleDeleteTimeSheet(data) {
    console.log(data);
    this.getTimeSheets();
    this.message = data.message;
    this.selectedTimeSheet = this.timeSheets[0];
    
  }


}
