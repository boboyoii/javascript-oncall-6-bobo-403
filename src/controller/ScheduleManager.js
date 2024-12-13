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

  createSchedule(month, day) {
    this.#month = month;
    const date = this.getDateByMonth(month);
    let dayIndex = DAY.indexOf(day);
    for (let today = 1; today <= date; today++) {
      if (this.isHoliday(month, today)) {
        if (
          this.#schedule.isOverlapBeforeWorker(
            this.#holidayWorkers[this.#holidayIndex]
          )
        ) {
          this.#schedule.addSchedule(
            `${month}월 ${today}일 ${DAY[dayIndex]}(휴일) ${
              this.#holidayWorkers[this.#holidayIndex + 1]
            }`
          );
          dayIndex = (dayIndex + 1) % DAY.length;
          this.#schedule.addSchedule(
            `${month}월 ${today + 1}일 ${DAY[dayIndex]}(휴일) ${
              this.#holidayWorkers[this.#holidayIndex]
            }`
          );
          this.#holidayIndex =
            (this.#holidayIndex + 2) % this.#holidayWorkers.length;
        } else {
          this.#schedule.addSchedule(
            `${month}월 ${today}일 ${DAY[dayIndex]}(휴일) ${
              this.#holidayWorkers[this.#holidayIndex]
            }`
          );
          this.#holidayIndex =
            (this.#holidayIndex + 1) % this.#holidayWorkers.length;
        }
      } else if (this.isWeekend(dayIndex)) {
        this.#schedule.addSchedule(
          `${month}월 ${today}일 ${DAY[dayIndex]} ${
            this.#holidayWorkers[this.#holidayIndex]
          }`
        );
        this.#holidayIndex =
          (this.#holidayIndex + 1) % this.#holidayWorkers.length;
      } else {
        this.#schedule.addSchedule(
          `${month}월 ${today}일 ${DAY[dayIndex]} ${
            this.#weekdaysWorkers[this.#weekIndex]
          }`
        );
        this.#weekIndex = (this.#weekIndex + 1) % this.#weekdaysWorkers.length;
      }
      dayIndex = (dayIndex + 1) % DAY.length;
    }
    return this.#schedule;
  }

  isWeekend(dayIndex) {
    if (!(dayIndex >= 0 && dayIndex <= 4)) return true;
    return false;
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
