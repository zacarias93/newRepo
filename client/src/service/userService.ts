import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// import { User } from '../model/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
    constructor(private http: Http) { }  

    private userUrl = 'https://wellsapp-9ef37.firebaseio.com/'
    private auth = '.json?auth=MTnhWFwoABcCIpqaVPZA0YjEN7aFMo40c0GGAQwb'

    getUser(userName: string) {
        var url = this.userUrl + userName + this.auth ;
        console.log('DEBUG - getUser() - url ' + url);

        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    handleError(error: any) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }



}

