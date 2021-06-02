import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState, useEffect } from 'react';

const CountDown = (props) => {
    const { show, number, counter, setCounter } = props;

    const [isStop, setIsStop] = useState(false);

    useEffect(() => {
        if (!isStop && counter > 0) {
            const countdown = setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(countdown);
        }
    }, [counter, isStop]);

    const handleStop = () => {
        setIsStop(true);
    };

    return (
        <>
            { !!show ?
                <div className='countdown'>
                    <h1>{number} countdown to 0</h1>
                    <p>{counter}</p>
                    <Button className='btn-stop' onClick={handleStop}>Stop</Button>
                </div> : ''
            }
        </>
    )
}

export default CountDown;