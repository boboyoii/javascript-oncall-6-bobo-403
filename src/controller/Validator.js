import { DAY } from '../constant/DayConstant.js';
import { ERROR_MESSAGE } from '../constant/Message.js';

class Validator {
  validateMonth(month) {
    if (!(Number.isInteger(month) && month >= 1 && month <= 12)) {
      throw new Error(ERROR_MESSAGE.invalid_month);
    }
  }

  validateDayOfWeek(day) {
    if (!DAY.includes(day)) {
      throw new Error(ERROR_MESSAGE.invalid_day_of_week);
    }
  }

  validateWorkerNumber(workers) {
    if (!(workers.length >= 5 && workers.length <= 35)) {
      throw new Error(ERROR_MESSAGE.invalid_worker_number);
    }
  }

  validateNameUnique(workers) {
    const uniqueWokers = new Set(workers);
    if (uniqueWokers.size !== workers.length) {
      throw new Error(ERROR_MESSAGE.invalid_name_unique);
    }
  }

  validateWorkerName(name) {
    if (!(name.length <= 5)) {
      throw new Error(ERROR_MESSAGE.invalid_name_length);
    }
  }
}

export default Validator;
