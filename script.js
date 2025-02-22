const hour=document.getElementById('hour');
const minute=document.getElementById('minute');
const second=document.getElementById('second');
const Mill=document.getElementById('mill');
const start=document.getElementById('start');
const reset=document.getElementById('reset');
const stop=document.getElementById('stop');
let time=0;
let min=0;
let sec=0;
let mill=0;
let timer;
 start.addEventListener('click',()=>{
 if(timer) {
    clearInterval(timer); 
    console.log("timer"+timer);
    
 }
    
 //  start.disabled="true";
   timer=setInterval(update,10);
   console.log(timer);
 })
 
 reset.addEventListener('click',()=>{
  clearInterval(timer);
  time=0;
  min=0;
  sec=0;
  second.innerText="00";
  minute.innerText="00"+":";  
  hour.innerText="00"+":";
 })
 stop.addEventListener('click',()=>{
     clearInterval(timer);
    // timer=null;
     //start.disabled="false";
 })
/* 
 function update() {
          sec++;
          second.innerText=sec;
          if(sec==60){
             min++;
             sec=0;
             second.innerText=sec;
             minute.innerText=min+":";
       }else if(min==60){
       
             time++;
             min=0;
             minute.innerText=min+":";
             hour.innerText=time+":";
          } 
 }
 
*/
function update() {
    mill += 10; 

    if (mill >= 1000) {
        sec++; 
        mill = 0; 
    }

    if (sec >= 60) {
        min++; 
        sec = 0; 
    }

    if (min >= 60) {
        time++; 
        min = 0; 
    }

    
    second.innerText = sec < 10 ? "0" + sec : sec;
    minute.innerText = min < 10 ? "0" + min + ":" : min + ":";
    hour.innerText = time < 10 ? "0" + time + ":" : time + ":";
    
}
