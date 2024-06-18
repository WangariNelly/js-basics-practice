const leapYear = (year) => {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapYear(2022));
console.log(leapYear(2024));
console.log(leapYear(2012));
console.log(leapYear(2009));