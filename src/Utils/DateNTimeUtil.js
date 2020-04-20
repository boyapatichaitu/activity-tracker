const processTime = time12h => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return [parseInt(hours), parseInt(minutes)];
  }
  
 const getMonthFromString = (mon) => {
    return new Date(Date.parse(mon +" 1, 2012")).getMonth()
  }
const processDateAndTime = (period, index) => {
    const startDateNTime = period.start_time.split("  "),
        startDate = startDateNTime[0].split(' '),
        processedStartTime = processTime(startDateNTime[1]),
        endDateNTime = period.end_time.split("  "),
        endDate = endDateNTime[0].split(' '),
        processedEndTime = processTime(endDateNTime[1]),
        processedPeriod = {
        id: index,
        title: '',
        start: new Date(parseInt(startDate[2]), getMonthFromString(startDate[0]), parseInt(startDate[1]), processedStartTime[0], processedStartTime[1]),
        end: new Date(parseInt(endDate[2]), getMonthFromString(endDate[0]), parseInt(endDate[1]), processedEndTime[0], processedEndTime[1]),
      };
    return processedPeriod;
  }

  export default processDateAndTime;