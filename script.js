var minutes;
var seconds;
var milliseconds;
var getmin = document.getElementById('min')
var getsec = document.getElementById('sec')
var getmili = document.getElementById('msec')
var interval


function start(){
    interval=setInterval(function(){
        milliseconds++;
        getmili.innerHTML=milliseconds;
        if(milliseconds >= 100){
            seconds++;
            getsec.innerHTML=seconds;
            milliseconds=0;
        } else if(seconds>=60){
            minutes++;
            getmin.innerHTML=minutes;
            seconds=0;
        }
    },10);
    document.getElementById('sss').disabled=true;    
}


function stop(){
    clearInterval(interval)
    document.getElementById('sss').disabled=false

}
function reset(){
    clearInterval(interval)
    minutes=0;
    seconds=0;
    milliseconds=0;
    getmin.innerHTML=minutes;
    getsec.innerHTML=seconds;
    getmili.innerHTML=milliseconds;

}


// function reset(){
//     clearInterval(interval);
//     minutes=0;
//     seconds=0;
//     milliseconds=0;
//     getmin.innerHTML=minutes;
//     getsec.innerHTML=seconds;
//     getmili.innerHTML=milliseconds;
// }


//stopwatch js code
// var minutes = 0;
// var seconds = 0;
// var milliseconds = 0;

// var getmin = document.getElementById('min');

// var getsec = document.getElementById('sec');

// var getmili = document.getElementById('msec');
// var interval; 

// function start() {
//     interval = setInterval(function() {
//         milliseconds++;
//         getmili.innerHTML = milliseconds;
//         if (milliseconds >= 100) {
//             seconds++;
//             getsec.innerHTML = seconds;
//             milliseconds = 0;
//         } else if (seconds >= 60) {
//             minutes++;
//             getmin.innerHTML = minutes;
//             seconds = 0;
//         }
//     }, 10);
//     document.getElementById('sss').disabled=true;
// }




// function stop(){
//     clearInterval(interval)
//     document.getElementById('sss').disabled=false;
// }

// function reset(){
//     clearInterval(interval);
//     minutes=0;
//     seconds=0;
//     milliseconds=0;
//     getmin.innerHTML=minutes;
//     getsec.innerHTML=seconds;
//     getmili.innerHTML=milliseconds;
// }

// var minutes;
// var seconds;
// var milliseconds;
// var getmin = document.getElementById('min')
// var getsec = document.getElementById('sec')
// var getmili = document.getElementById('min')
// var interval


// function start(){
//     interval=setInterval(function(){
//         milliseconds++;
//         getmili.innerHTML=milliseconds;
//         if(milliseconds >= 100){
//             seconds++;
//             getsec.innerHTML=seconds;
//             milliseconds=0;
//         } else if(seconds>=60){
//             minutes++;
//             getmin.innerHTML=minutes;
//             seconds=0;
//         }
//     },10);
//     document.getElementById('sss').disabled=true;    
// }


// function stop(){
//     clearInterval(interval)
//     document.getElementById('sss').disabled=false

// }
// function reset(){
//     clearInterval(interval)
//     var minutes=0;
//     var seconds=0;
//     var milliseconds=0;
//     getmin.innerHTML=minutes;
//     getsec.innerHTML=seconds;
//     getmili.innerHTML=milliseconds;

// }



// setInterval(function(){
//     document.write('hello')
// },1000)  //1000=1sec

// function timer(){
//     document.write('umar')
// }
// setInterval(timer,2000)

// setTimeout(function(){
//     document.write('abcd')
// },4000)

// var num=0;
// setInterval(function(){
//     num++
//     console.log(num)
// },100)

// stopwatch js code
// var minutes=0;
// var seconds=0;
// var miliseconds=0;
// var getmin=document.getElementById('min');
// var getsec=document.getElementById('sec');
// var getmili=document.getElementById('msec');
// var intervalId;


// function start(){   
//     intervalId=setInterval(function() {
//         miliseconds++;
//         getmili.innerHTML=miliseconds;
//         if(miliseconds >= 100){
//             seconds++;
//             getsec.innerHTML=seconds;
//             miliseconds=0;
//         }
//         else if(seconds>=60){
//             minutes++;
//             getmin.innerHTML=minutes;
//             seconds=0;
            
//         }   
//     }, 10);

// }

