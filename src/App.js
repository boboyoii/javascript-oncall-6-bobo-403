import ScheduleController from './controller/ScheduleController.js';
import InputView from './view/InputView.js';

class App {
  scheduleController;

  async run() {
    const [month, day] = await InputView.inputMonthAndDay();
    const weekdayWorkers = await InputView.inputWeekdayOrder();
    const holidayWorkers = await InputView.inputHolidayOrder();

    this.scheduleController = new ScheduleController(
      month,
      day,
      weekdayWorkers,
      holidayWorkers
    );
  }
}

export default App;
