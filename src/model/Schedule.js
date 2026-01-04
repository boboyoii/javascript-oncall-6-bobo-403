import { DAY } from '../constants/schedule.js';

class Schedule {
  #month;
  #dayIndex;

  constructor(month, day) {
    this.#month = month;
    this.#dayIndex = DAY.indexOf(day);
  }
}

export default Schedule;
