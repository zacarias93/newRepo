import { TimeSheet } from './model/timesheet';
import { User } from './model/user'
import { Job } from './model/job';
import { Constants } from './constants';


export class DB {

    constructor() { };

    private static timeSheets: TimeSheet[] = []

    private static activeUser: User;

    static initDB() {
        var user = new User(99, 'z', 'pass', 'zac', 'lee', 99);
        DB.setActiveUser(user);       
      }

    public static getTimeSheets() {
        return this.timeSheets;
    }

    public static setActiveUser(user: User) {
        DB.activeUser = user;
    }

    public static getActiveUser(): User {
        return DB.activeUser;
    }

}
