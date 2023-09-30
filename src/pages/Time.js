import React, {useState, useEffect} from 'react';

const useCurrentTime = (interval, currentTime) => {

    const [time, setTime] = useState(currentTime);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(currentTime)
        }, interval);

        return () => { 
            clearInterval(intervalID);
        }
    }, []);

    return time;
}

const Time = (props) => {

    const getCurrentTime = () => new Date()

    const date = useCurrentTime(1000, getCurrentTime);

    return (
            <>
                <p>Current Time : {date.toLocaleString("en-US")}</p>
            </>
    );
};

export default Time;