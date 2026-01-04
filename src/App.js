import InputView from './view/InputView.js';

class App {
  async run() {
    const [month, day] = await InputView.inputMonthAndDay();
    const weekdayWorkers = await InputView.inputWeekdayOrder();
    const holidayWorkers = await InputView.inputHolidayOrder();
  }
}

export default App;
