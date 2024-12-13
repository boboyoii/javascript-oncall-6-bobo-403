const PREFIX_ERROR = '[ERROR]';

export const ERROR_MESSAGE = Object.freeze({
  invalid_month: `${PREFIX_ERROR} 월을 1-12로 입력해주세요.\n`,
  invalid_day_of_week: `${PREFIX_ERROR} 요일을 월-일로 입력해주세요.\n`,
  invalid_worker_number: `${PREFIX_ERROR} 근무자는 5명 이상 35명 이하여야합니다.\n`,
  invalid_name_length: `${PREFIX_ERROR} 근무자 닉네임은 최대 5자 까지 가능 합니다.\n`,
  invalid_name_unique: `${PREFIX_ERROR} 근무자 닉네임이 중복됩니다.\n`,
});

export const PROGRESS_MESSAGE = Object.freeze({
  enter_month_and_day: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  enter_weekdays_worker: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  enter_holiday_worker: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});
