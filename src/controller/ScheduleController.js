import { DAY, MONTHLY_DATE } from '../constants/schedule.js';
import Schedule from '../model/Schedule.js';
import Workers from '../model/Workers.js';

class ScheduleController {
  schedule;
  weekdayWorkers;
  holidayWorkers;
  dayIndex;

  constructor(month, day, weekdayWorkers, holidayWorkers) {
    this.schedule = new Schedule(month);
    this.weekdayWorkers = new Workers(weekdayWorkers);
    this.holidayWorkers = new Workers(holidayWorkers);
    this.dayIndex = DAY.indexOf(day);
  }

  makeSchedule() {
    const month = this.schedule.getMonth();
    const monthDate = MONTHLY_DATE[month];

    for (let date = 1; date <= monthDate; date++) {
      const day = DAY[this.dayIndex];
      const before = this.schedule.getBefore();

      if (day === '토' || day === '일') this.addHolidaySchedule(date, day);

      this.dayIndex = (this.dayIndex + 1) % DAY.length;
    }
  }

  addWeekdaySchedule(before, date, day) {
    const next = this.weekdayWorkers.pickNext(before);
    this.schedule.addTable(date, day, next);
  }

  addHolidaySchedule(before, date, day) {
    const next = this.holidayWorkers.pickNext(before);
    this.schedule.addTable(date, day, next);
  }
}

export default ScheduleController;
