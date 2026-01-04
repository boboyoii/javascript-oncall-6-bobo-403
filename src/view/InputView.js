import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constants/messages.js';

const InputView = {
  async inputMonthAndDay() {
    const input = await Console.readLineAsync(
      PROGRESS_MESSAGE.INPUT_MONTH_AND_DAY
    );
    const [month, day] = input.split(',');
    return [month, day];
  },
};

export default InputView;
