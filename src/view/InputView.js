import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/messages.js';
import Validator from '../utils/Validator.js';

const InputView = {
  async inputMonthAndDay() {
    const input = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_MONTH_AND_DAY
    );
    const [month, day] = input.split(',');
    Validator.isValidMonth(month);
    Validator.isValidDay(day);
    return [month, day];
  },

  async inputWeekdayOrder() {
    const order = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_WEEKDAY_ORDER
    );
    const workers = order.split(',');
    return workers;
  },
};

export default InputView;
