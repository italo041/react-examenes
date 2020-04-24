import React from 'react';
import { useTimer } from 'react-timer-hook'; 
import './Timer.css';
 
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
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called')});
  
  window.pausarTimer = function() {
      pause();
   }  
  return (
    <div style={{textAlign: 'center'}}>
  
      <div className="timer-style font-weight-bold">
       <span>{minutes < 10 ? '0'+minutes : minutes}</span>:<span>{seconds}</span>
      </div>
      
    </div>
  );
} 
 
export default  Timer;
