import { Console } from '@woowacourse/mission-utils';
import { PROGRESS_MESSAGE } from '../constant/Message.js';
import InputHandler from '../controller/InputHandler.js';

class UserInput {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async inputMonthAndDay() {
    const monthAndDay = await Console.readLineAsync(
      PROGRESS_MESSAGE.enter_month_and_day
    );

    return this.#inputHandler.getValidateMonthAndDay(monthAndDay);
  }
}

export default UserInput;
