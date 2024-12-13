import { Console } from '@woowacourse/mission-utils';

class UserOutput {
  printSchedule(schedule) {
    Console.print(schedule.showSchedule());
  }
}

export default UserOutput;
