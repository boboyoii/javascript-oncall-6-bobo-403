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
    return [month, day];
  },
};

export default InputView;
