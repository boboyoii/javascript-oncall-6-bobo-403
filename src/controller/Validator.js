import { ERROR_MESSAGE } from '../constant/Message';

class Validator {
  validateMonth(month) {
    if (!(Number.isInteger(month) && month >= 1 && month <= 12)) {
      throw new Error(ERROR_MESSAGE.invalid_month);
    }
  }
}

export default Validator;
