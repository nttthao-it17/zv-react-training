import { Button } from 'antd';
import { useState } from 'react';

import OpenModal from './OpenModal';

const KeyLogger = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [text, setText] = useState('');
    const [key, setKey] = useState('');
    const [keyLogArr, setKeyLogArr] = useState([]);

    const showModal = () => {
        setIsModalVisible(true);
    };

    // Enter key: 
    // event.key === 'Enter'
    // event.charCode === 13
    const handleKeyPress = (e) => {
        switch (e.charCode) {
            case 13:
                setText(val => val + 'ENTER'); break;
            case 32:
                setText(val => val + 'SPACE'); break;
        }
    }

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <div>
                {text}
            </div>

            <OpenModal
                isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}
                text={text} setText={setText}
                handleKeyPress={handleKeyPress}
                key={key} setKey={setKey}
            />
        </>
    );
}

export default KeyLogger;