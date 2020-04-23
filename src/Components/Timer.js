import React from 'react';
import { useTimer } from 'react-timer-hook'; 
 
function Timer({ expiryTimestamp }) {
 
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });
  
  window.pausarTimer = function() {
      console.log("se pauso");
      pause();
   } 
 
  return (
    <div style={{textAlign: 'center'}}>
  
      <div style={{fontSize: '100px'}}>
       <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      
    </div>
  );
} 
 
export default  Timer;
