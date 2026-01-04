import Schedule from '../model/Schedule.js';
import Workers from '../model/Workers.js';

class ScheduleController {
  schedule;
  weekdayWorkers;
  holidayWorkers;

  constructor(month, day, weekdayWorkers, holidayWorkers) {
    this.schedule = new Schedule(month, day);
    this.weekdayWorkers = new Workers(weekdayWorkers);
    this.holidayWorkers = new Workers(holidayWorkers);
  }
}

export default ScheduleController;
