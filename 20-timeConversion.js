function timeConversion(s) {
    let time = 0;
    let hour = Number(s.slice(0,2));
    let minute = Number(s.slice(3,5));
    let second = Number(s.slice(6,8));

    if (s[8] = 'P') {
        time = (hour + 12);
        console.log(time + ':' + minute + ':' + second);
    } else if (s[8] = 'A') {
        console.log(time + ':' + minute + ':' + second);
    }

}

//console.log(timeConversion('12:05:45PM'));
//console.log(timeConversion('07:05:45PM'));

timeConversion('07:05:45PM');
//19:05:45
timeConversion('12:05:45PM');


//https://www.hackerrank.com/challenges/time-conversion/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign