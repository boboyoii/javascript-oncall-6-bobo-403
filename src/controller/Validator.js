import DAY from '../constant/DayConstant.js';
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
}

export default Validator;
