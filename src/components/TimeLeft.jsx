import React, { useState } from 'react'
import { finalTime } from './Time';

// const finalTime = Number(Math.abs(new Date().getTime() / 1000).toFixed(0)) + 180;
// const finalTime = 1667318326 + 3600+ 3600;

function TimeLeft() {
    const [timeRemaining, setTimeRemaining] = useState(finalTime);

    setInterval(() => {
        var currentTime = Number(Math.floor(new Date().getTime() / 1000).toFixed(0));
        setTimeRemaining(finalTime - currentTime)
    }, 1000);

    return (
        <div className="time_remaining_block">
            <div className="time_remaining_text"><span className="time_block">{Math.floor(timeRemaining / 3600)}</span> : <span className="time_block">{(Math.floor(timeRemaining / 60)%60)}</span> : <span className="time_block">{timeRemaining%60}</span></div>
        </div>
    );
}

export default TimeLeft;