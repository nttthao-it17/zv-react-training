import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useEffect } from 'react';

const CountDown = (props) => {
    const { show, number, counter, setCounter, isStop, setIsStop } = props;

    useEffect(() => {
        if (!!isStop && counter > 0) {
            const countdown = setInterval(() => setCounter(counter - 1), 1000);
            return () => clearInterval(countdown);
        } else {
            setIsStop(false);
            clearInterval(counter);
        }
    }, [counter, isStop]);

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