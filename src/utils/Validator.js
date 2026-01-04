import { ERROR_MESSAGE } from '../constants/messages.js';
import { DAY } from '../constants/schedule.js';

const Validator = {
  isValidMonth(monthStr) {
    const month = Number(monthStr);
    if (!(Number.isInteger(month) && month >= 1 && month <= 12))
      throw new Error(ERROR_MESSAGE.INVALID_MONTH);
  },
  isValidDay(day) {
    if (!DAY.includes(day)) throw new Error(ERROR_MESSAGE.INVALID_DAY);
  },
  isValidCount(workers) {
    if (workers.length < 5 || workers.length > 35)
      throw new Error(ERROR_MESSAGE.INVALID_COUNT);
  },
  isUniqueWorkers(workers) {
    const uniqueWorkers = new Set(workers);
    if (workers.length !== uniqueWorkers.size)
      throw new Error(ERROR_MESSAGE.DUPLICATION_NAME);
  },
  isValidNameLength(workers) {
    if (workers.some((worker) => worker.length < 5))
      throw new Error(ERROR_MESSAGE.INVALID_NAME_LENGTH);
  },
};

export default Validator;
