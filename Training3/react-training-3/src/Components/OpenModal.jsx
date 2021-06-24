import { Modal } from 'antd';
import { useState } from 'react';

const OpenModal = (props) => {
    const {
        isModalVisible, setIsModalVisible,
        text, setText,
        handleKeyPress,
        key, setKey
    } = props;


    const handleOk = () => {
        setIsModalVisible(false);
        setText('');
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setText('');
    };

    const handleChange = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <Modal
                title="Key Logger"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}

            >
                <div>
                    <label>Text</label>
                    <textarea
                        rows="3" cols="50"
                        value={text}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                    />
                </div>
            </Modal>
        </>
    )

}

export default OpenModal;