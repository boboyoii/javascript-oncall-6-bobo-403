class ScheduleManager {
  getDateByMonth(month) {
    if ([2].includes(month)) return 28;
    if ([4, 6, 9, 11].includes(month)) return 30;
    return 31;
  }
}

export default ScheduleManager;
