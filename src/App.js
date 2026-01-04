import ScheduleController from './controller/ScheduleController.js';
import retry from './utils/retry.js';
import InputView from './view/InputView.js';
import OutputView from './view/OuputView.js';

class App {
  scheduleController;

  async run() {
    const [month, day] = await retry(() => InputView.inputMonthAndDay());
    const weekdayWorkers = await retry(() => InputView.inputWeekdayOrder());
    const holidayWorkers = await retry(() => InputView.inputHolidayOrder());

    this.scheduleController = new ScheduleController(
      month,
      day,
      weekdayWorkers,
      holidayWorkers
    );
    const schedule = this.scheduleController.makeSchedule();

    OutputView.printSchedule(schedule);
  }
}

export default App;
