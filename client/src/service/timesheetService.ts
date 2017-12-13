import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TimeSheet } from '../model/timesheet';
import { DB } from '../db';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TimeSheetService {
    constructor(private http: Http) { }

    private timeSheetUrl = 'http://localhost:8080/timesheet'

    getTimesheets(): Observable<TimeSheet[]> {
        return this.http
            .get(this.timeSheetUrl)
            .map((res: Response) => res.json())
        // .catch(this.handleError);
    }

    deleteTimeSheet(timeSheet: TimeSheet): Observable<String> {
        
        var url = this.timeSheetUrl + '/remove/' + timeSheet.id
        
        return this.http
            .get(url)
            .map((res:Response) => res.json())
            // .catch(this.handleError);
    }

    submitTimeSheet(timesheet: TimeSheet) {
        console.log('Service: submitTimeSheet()')
        console.log('URL: ' + this.timeSheetUrl);
        console.log(timesheet);

        return this.http
            .post(this.timeSheetUrl, timesheet)
            // .subscribe(res => {
            //     console.log('statusText: ' + res.statusText);
            // },
            // err => {
            //     console.log("Error occured");
            // });
    }


    handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }


}