export const PROGRESS_MESSAGE = Object.freeze({
  INPUT_MONTH_AND_DAY: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  INPUT_WEEKDAY_ORDER: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  INPUT_HOLIDAY_ORDER: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

export const ERROR_MESSAGE = Object.freeze({
  INVALID_MONTH: '[ERROR] 월은 1~12 숫자로 입력해주세요.',
  INVALID_DAY: '[ERROR] 요일은 월-일 로 입력해주세요.',
  INVALID_COUNT: '[ERROR] 근무자는 5명 이상 35명 이하 입력가능합니다.',
  DUPLICATION_NAME: '[ERROR] 중복된 닉네임이 존재합니다.',
  INVALID_NAME_LENGTH: '[ERROR] 닉네임이 입력되지 않았거나 5자를 초과했습니다.',
  NOT_SAME_WORKERS:
    '[ERROR] 평일 순번에 포함된 근무자와 휴일 순번에 포함된 근무자가 다릅니다.',
});
