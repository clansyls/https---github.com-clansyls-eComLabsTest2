String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second parm
    var hours = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}


var count = '172799'; 


var counter = setInterval(timer, 1000);

function timer() {


    console.log(count);

    if (parseInt(count) <= 0) {
        clearInterval(counter);
        return;
    }
    var temp = count.toHHMMSS();
    count = (parseInt(count) - 1).toString();

    $('#timer').html(temp);
}