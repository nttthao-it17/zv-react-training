import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import Modal from './Modal';
import { ModalStyle } from './modalStyle';
import CloseButton from './CloseButton';

const ShowModal = () => {

    const [showModal, setShowModal] = useState(false);

    const onHideModal = () => setShowModal(false);

    return (
        <ModalStyle>
            <div className='modal-main'>
                <Button
                    onClick={() => setShowModal(true)}
                    disabled={!!showModal ? true : ''}
                >
                    Open Modal
                </Button>

                <Modal isShow={showModal}>
                    Hello
                    <CloseButton handleClose={onHideModal} />
                </Modal>
            </div>
        </ModalStyle>

    )
}

export default ShowModal;