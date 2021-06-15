import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useEffect } from 'react';

const CountDown = (props) => {
    const { show, number, counter, setCounter, isStop, setIsStop } = props;

    useEffect(() => {
        if (!!isStop && counter > 0) {
            const countdown = decreaseCountDown();
            return () => clearInterval(countdown);
        }
    }, [counter, isStop]);

    const decreaseCountDown = () => setInterval(() => setCounter(counter - 1), 1000);

    const handleStop = () => {
        setIsStop(false);
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