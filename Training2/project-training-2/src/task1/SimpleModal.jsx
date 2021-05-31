import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import Modal from './Modal';
import { ModalStyle } from './modalStyle';

const SimpleModal = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <ModalStyle>
            <div className='modal-main'>
                <Button
                    onClick={() => setShowModal(true)}
                    disabled={!!showModal ? true : ''}
                >
                    Open Modal
                </Button>
                <Modal
                    show={showModal}
                    children='This is a simple modal'
                    handleClose={() => setShowModal(false)}
                />
            </div>
        </ModalStyle>

    )
}

export default SimpleModal;