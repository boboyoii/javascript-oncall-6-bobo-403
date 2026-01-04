import Schedule from '../model/Schedule.js';
import Workers from '../model/Workers.js';

class ScheduleController {
  schedule;
  weekdayWorkers;
  holidayWorkers;

  constructor(month, day, weekdayWorkers, holidayWorkers) {
    this.schedule = new Schedule(month);
    this.weekdayWorkers = new Workers(weekdayWorkers);
    this.holidayWorkers = new Workers(holidayWorkers);
  }

  addWeekdaySchedule(before, date, day) {
    const next = this.weekdayWorkers.getNext(before);
    this.schedule.addTable(date, day, next);
  }

  addHolidaySchedule(before, date, day) {
    const next = this.holidayWorkers.getNext(before);
    this.schedule.addTable(date, day, next);
  }
}

export default ScheduleController;
