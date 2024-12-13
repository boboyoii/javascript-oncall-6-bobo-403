import Validator from './Validator.js';

class InputHandler {
  #validator;

  constructor() {
    this.#validator = new Validator();
  }

  getValidateMonthAndDay(monthAndDay) {
    const date = monthAndDay.split(',');
    const month = Number(date[0]);
    this.#validator.validateMonth(month);

    const day = date[1];
    this.#validator.validateDayOfWeek(day);

    return { month, day };
  }

  getValidateWokers(workersString) {
    const workers = workersString.split(',');
    this.#validator.validateWorkerNumber(workers);
    this.#validator.validateNameUnique(workers);
    workers.forEach((worker) => this.#validator.validateWorkerName(worker));

    return workers;
  }
}

export default InputHandler;
