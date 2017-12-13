export class User {
  constructor(ID: number, userName: string, password: string, firstName: string, lastName: string, payRate: number) {
    this.ID = ID
    this.userName = userName
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.payRate = payRate

  }

  ID: number
  userName: string
  password: string
  firstName: string
  lastName: string
  payRate: number

}