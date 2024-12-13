import { Console } from '@woowacourse/mission-utils';

class UserOutput {
  printSchedule(schedule) {
    Console.print(schedule.showSchedul());
  }
}

export default UserOutput;
