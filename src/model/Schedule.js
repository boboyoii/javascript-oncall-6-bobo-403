class Schedule {
  #schedule;

  constructor() {
    this.#schedule = [];
  }

  addSchedule(schedule) {
    this.#schedule.push(schedule);
  }
}

export default Schedule;
