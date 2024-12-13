class Schedule {
  #schedule;

  constructor() {
    this.#schedule = [];
  }

  addSchedule(schedule) {
    this.#schedule.push(schedule);
  }

  showSchedule() {
    return this.#schedule;
  }

  isOverlapBeforeWorker(worker) {
    const regex = new RegExp(`${worker}`);
    if (regex.test(this.#schedule[this.#schedule.length - 1])) {
      return true;
    }
    return false;
  }
}

export default Schedule;
