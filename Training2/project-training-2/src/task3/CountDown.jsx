import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useEffect } from 'react';

const CountDown = (props) => {
    const { show, number, counter, setCounter, isStop, setIsStop } = props;

    useEffect(() => {
        if (counter <= 0) {
            setIsStop(false);
        }
    }, [counter]);

    useEffect(() => {
        if (isStop) {
            const intervalId = setInterval(() => decreaseCountDown(), 1000);
            return () => clearInterval(intervalId);
        }
    }, [isStop]);

    const decreaseCountDown = () => setCounter((prevCounter) => prevCounter - 1);

    const handleStop = () => {
        setIsStop(false);
    };

    return (
        <>
            {!!show ?
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