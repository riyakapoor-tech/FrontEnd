//sleep debt
function getSleepHours(day) {
  if (day === 'Monday') return 8;
  if (day === 'Tuesday') return 6;
  if (day === 'Wednesday') return 7;
  if (day === 'Thursday') return 5;
  if (day === 'Friday') return 8;
  if (day === 'Saturday') return 9;
  if (day === 'Sunday') return 7;
}

function getActualSleepHours() {
  return (
    getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
  );
}

function getIdealSleepHours() {
  const idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got more sleep than needed. Great job!");
  } else {
    console.log("You should get some rest. You're not sleeping enough.");
  }
}

calculateSleepDebt();