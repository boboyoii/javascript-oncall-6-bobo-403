import InputView from './view/InputView.js';

class App {
  async run() {
    const [month, day] = await InputView.inputMonthAndDay();
    const weekdayWorders = await InputView.inputWeekdayOrder();
  }
}

export default App;
