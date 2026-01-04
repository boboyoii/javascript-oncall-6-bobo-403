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
};

export default Validator;
