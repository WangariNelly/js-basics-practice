 /*@summary function shows todays date time and day
 */
//today's date
 const todayDate = new Date();
console.log(todayDate);

//what day of the week it is
const dayOfTheWeek = todayDate.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(` Today is: ${daylist[dayOfTheWeek]}`);

//getting the current hour,minute,seconds

let hour = todayDate.getHours();
hour = hour.toString().padStart(2, '0'); //formats the date to display in two digits
const minutes = todayDate.getMinutes().toString().padStart(2, '0');
const seconds = todayDate.getSeconds();
console.log(`Time is: ${hour}:${minutes}:${seconds}`);

//year
const currentYear = todayDate.getFullYear();
console.log(currentYear);

//full date
const fullDate = todayDate.toDateString();
console.log(fullDate);

