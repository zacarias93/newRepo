import { Component } from '@angular/core';
import { AdminPage } from '../admin/admin';
import { TimeSheetPage } from '../timesheet/timesheet';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  tab1Root: any = LoginPage;
  tab2Root: any = TimeSheetPage;
  tab3Root: any = AdminPage;

  constructor() {

  }
}
