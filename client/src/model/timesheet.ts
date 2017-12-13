import { Job } from './job'
import { User } from './user'

export class TimeSheet {
  constructor(user: User, job: Job, hoursWorked: string) {
    this.employeeID = user.ID
    this.employeeFirstName = user.firstName
    this.employeeLastName = user.lastName
    this.payRate = user.payRate
    this.jobName = job.name
    this.jobID = job.ID
    this.hoursWorked = hoursWorked
    this.dateString = new Date().toLocaleString()
  }

  id: number

  employeeID: number
  employeeFirstName: string
  employeeLastName: string
  payRate: number

  jobName: string
  jobID: number

  hoursWorked: string

  dateString: string

toString() {
  return 'Employee: ' + this.employeeFirstName + ' ' + this.employeeLastName + ' ' + this.employeeID + ' ' + this.payRate + 
        '\nJob:' + this.jobName + ' ' + this.jobID + 
        '\nHoursWorked: ' + this.hoursWorked
}
}









