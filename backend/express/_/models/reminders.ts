export default class Reminder {
  _id: number;
  isCompleted: boolean;
  constructor(public title: string) {
    this._id = Date.now();
    this.isCompleted = false;
  }
}
