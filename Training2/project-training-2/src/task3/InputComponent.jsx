import 'antd/dist/antd.css';
import { Button } from 'antd';
import { useState } from 'react';

import CountDown from './CountDown';
import { CoundownStyled } from './CoundownStyled';

const InputComponent = () => {
    const [value, setValue] = useState('');
    const [counter, setCounter] = useState(value);
    const [showCountdown, setShowCountdown] = useState(false);

    const [isStop, setIsStop] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleStart = () => {
        const reNoneNumber = /[^-?][^0-9]|[^0-9]/;

        if (value === '') {
            setValue('');
            setShowCountdown(false);

            alert('Please input a number');
        } else if (reNoneNumber.test(value)) {
            setValue('');
            setShowCountdown(false);

            alert('Invalid input. Must be a number');
        } else {
            const number = Number(value);
            if (number <= 0) {
                setValue('');
                setShowCountdown(false);

                alert('Number must be greater than 0');
            } else {
                setShowCountdown(true);
                setCounter(number);
                setIsStop(true);
            }
        }
    }

    return (
        <CoundownStyled >
            <div className='container'>
                <div className='typing-number'>
                    <label>Number</label><br />
                    <input
                        name='number'
                        placeholder="Please input the number"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <Button className='btn-start' onClick={handleStart}>Start</Button>

                <CountDown
                    show={showCountdown}
                    number={value}
                    counter={counter}
                    setCounter={setCounter}
                    isStop={isStop}
                    setIsStop={setIsStop}
                />
            </div >
        </CoundownStyled>

    )
}

export default InputComponent;