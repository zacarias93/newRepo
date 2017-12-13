export class Job {
  constructor(ID: number, name: string) {
    this.ID = ID
    this.name = name
  }
  ID: number
  name: string

  toString() {
    return '\nID: ' + this.ID + '\nName: ' + this.name
  }
}
