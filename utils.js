function getTemperaturesAround14h(intervals) {
  const temperatures = intervals
    .filter((interval) => {
      const startTime = new Date(interval.start);
      const endTime = new Date(interval.end);
      return startTime.getHours() <= 14 && endTime.getHours() >= 14;
    })
    .map((interval) => {
      return {
        datetime: interval.start,
        temperature: interval.temperature.value,
      };
    });

  return temperatures;
}

function reduceTemperaturesByDate(temperatures) {
  const reducedTemperatures = temperatures.reduce((acc, current) => {
    const curDate = new Date(current.datetime);
    const dateKey = curDate.toLocaleDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = current;
    } else {
      const accDate = new Date(acc[dateKey].datetime);
      if (
        Math.abs(accDate.getHours() - 14) > Math.abs(curDate.getHours() - 14)
      ) {
        acc[dateKey] = current;
      }
    }
    return acc;
  }, {});
  return reducedTemperatures;
}

module.exports = {
  getTemperaturesAround14h,
  reduceTemperaturesByDate,
};
