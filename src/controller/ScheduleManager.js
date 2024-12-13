import { DAY, HOLIDAY_DATE } from '../constant/DayConstant.js';
import Schedule from '../model/Schedule.js';

class ScheduleManager {
  #weekdaysWorkers;
  #holidayWorkers;
  #weekIndex;
  #holidayIndex;
  #month;
  #schedule;

  constructor(weekdaysWorkers, holidayWorkers) {
    this.#weekdaysWorkers = weekdaysWorkers;
    this.#holidayWorkers = holidayWorkers;
    this.#weekIndex = 0;
    this.#holidayIndex = 0;
    this.#schedule = new Schedule();
  }

  isHoliday(month, today) {
    if (HOLIDAY_DATE[month] !== undefined)
      if (HOLIDAY_DATE[month].includes(today)) return true;
    return false;
  }

  getDateByMonth(month) {
    if ([2].includes(month)) return 28;
    if ([4, 6, 9, 11].includes(month)) return 30;
    return 31;
  }
}

export default ScheduleManager;
