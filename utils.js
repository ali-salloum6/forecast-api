// Function to extract temperatures around 14:00 (2 PM) from an array of intervals
function getTemperaturesAround14h(intervals) {
  // Filter intervals that overlap with 14:00 (2 PM)
  const temperatures = intervals
    .filter(interval => {
      const startTime = new Date(interval.start);
      const endTime = new Date(interval.end);
      // Check if the interval overlaps with 14:00 (2 PM)
      return startTime.getHours() <= 14 && endTime.getHours() >= 14;
    })
    .map(interval => {
      return {
        datetime: interval.start,
        temperature: interval.temperature.value
      };
    });

  return temperatures;
}

// Function to reduce an array of temperatures to a single temperature per date
function reduceTemperaturesByDate(temperatures) {
  // Use reduce to group temperatures by date
  const reducedTemperatures = temperatures.reduce((acc, current) => {
    // Get the date part of the datetime
    const curDate = new Date(current.datetime);
    const dateKey = curDate.toLocaleDateString();
    // If the date is not already in the accumulator, add it
    if (!acc[dateKey]) {
      acc[dateKey] = current;
    } else {
      // If the date is already in the accumulator, check if the current temperature is closer to 14:00 (2 PM)
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
  reduceTemperaturesByDate
};
