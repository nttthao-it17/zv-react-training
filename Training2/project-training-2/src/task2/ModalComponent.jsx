import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';

import Modal from './Modal';
import { ModalStyle } from './modalStyle';
import CloseButton from './CloseButton';

const ShowModal = () => {

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

                {!!showModal ?
                    <Modal>
                        Hello
                        <CloseButton handleClose={() => setShowModal(false)} />
                    </Modal> :
                    ''
                }
            </div>
        </ModalStyle>

    )
}

export default ShowModal;