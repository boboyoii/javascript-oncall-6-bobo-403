import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printSchedule(schedule) {
    Console.print(`\n${schedule.join('\n')}\n`);
  },
};

export default OutputView;
