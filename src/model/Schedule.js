import { DAY } from '../constants/schedule.js';

class Schedule {
  #month;
  #table;
  #before;

  constructor(month) {
    this.#month = month;
    this.#before = null;
    this.#table = [];
  }

  getMonth() {
    return this.#month;
  }

  getBefore() {
    return this.#before;
  }

  addTable(date, day, name) {
    this.#table.push(`${this.#month}월 ${date}일 ${day} ${name}`);
    this.#before = name;
  }
}

export default Schedule;
