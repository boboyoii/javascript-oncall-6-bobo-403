class Schedule {
  #schedule;

  constructor() {
    this.#schedule = [];
  }

  addSchedule(schedule) {
    this.#schedule.push(schedule);
  }

  showSchedule() {
    return this.#schedule.join('\n');
  }
}

export default Schedule;
