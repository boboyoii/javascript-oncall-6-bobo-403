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

  addHolidaySchedule(before, date, day) {
    const next = this.holidayWorkers.getNext(before);
    this.schedule.addTable(date, `${day} 휴일`, next);
  }
}

export default ScheduleController;
