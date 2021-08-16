//The function should accept a day as an argument and return the number of hours you slept that night.For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.Use an if/else or switch statement to implement this.
function getSleepHours (day) {
  switch(day){
    case "monday":
    return 8;
    break;
    case "tuesday":
    return 7;
    break;
    case "wednesday":
    return 9;
    break;
    case "thursday":
    return 6;
    break;
    case "friday":
    return 7.5;
    break;
    case "saturday":
    return 10;
    break;
    case "sunday":
    return 10;
    break;
  }
};

console.log(getSleepHours("tuesday"));//7

//Inside the getActualSleepHours() function, call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return.
const getActualSleepHours = () => 
  getSleepHours("monday") + 
  getSleepHours("tuesday") + 
  getSleepHours("wednesday") + 
  getSleepHours("thursday") + 
  getSleepHours("friday") +
   getSleepHours("saturday") + 
   getSleepHours("sunday");

console.log(getActualSleepHours());// 57.5


//To get the ideal sleep hours that you prefer, create a function named getIdealSleepHours with no parameters.Inside the function, declare a variable named idealHours and set its value to your ideal hours per night. Then return the idealHours multiplied by 7.You’ll want to multiply by 7 to get the total hours you prefer per week.

function getIdealSleepHours() {
  var idealHours = 8.5
  return idealHours*7
}

console.log(getIdealSleepHours()); //59.5

//Now that you can get the actual sleep hours and the ideal sleep hours, it’s time to calculate sleep debt.Create a function named calculateSleepDebt with no parameters.Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.

function calculateSleepDebt () {
  const actualSleepHours = getActualSleepHours(); 
   const idealSleepHours= getIdealSleepHours(8); 

if (actualSleepHours === idealSleepHours){
  console.log("Perfect amount of sleep!");
} else if (actualSleepHours > idealSleepHours){
console.log("You got "+ (idealSleepHours - actualSleepHours) +"hours more sleep than needed!");
} else if (actualSleepHours < idealSleepHours){
console.log("You got " + (idealSleepHours - actualSleepHours) + " hours less. Get some rest!");
}
}

calculateSleepDebt();//You got 2 hours less. Get some rest!