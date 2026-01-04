import InputView from './view/InputView.js';

class App {
  async run() {
    const [month, day] = await InputView.inputMonthAndDay();
  }
}

export default App;
