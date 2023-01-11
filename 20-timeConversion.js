function timeConversion(s) {

    let hour = Number(s.slice(0,2));
    let minute = s.slice(3,5);
    let second = s.slice(6,8);

    if (s[8] === 'P') { //pos meio dia
        hour += 12;
        if (hour < 10) {
            return (String('0' + hour + ':' + minute + ':' + second));
        } else if (hour > 10 && hour !== 24) {
            return (String(hour + ':' + minute + ':' + second));
        } else if (hour === 24) {
            return (String('12' + ':' + minute + ':' + second)); //meio dia
        }
        
    } else if (s[8] === 'A') {
        if (hour < 10) {
            return (String('0' + hour + ':' + minute + ':' + second));
        } else if (hour > 10 && hour !== 12) {
            return (String(hour + ':' + minute + ':' + second));
        } else if (hour === 12) {
            return (String('00' + ':' + minute + ':' + second)); //meia noite
        }
        
    }

}
//minha solução, pode conter erros


console.log(timeConversion('07:05:45PM'));
//19:05:45
console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:45:54PM'))
//12:45:54

console.log(timeConversion('06:40:03AM'))
console.log(timeConversion('12:40:22AM'))



//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
