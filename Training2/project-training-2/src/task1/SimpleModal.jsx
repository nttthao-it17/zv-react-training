import 'antd/dist/antd.css';
import { useState } from 'react';
import { Button } from 'antd';

import { SimpleModalStyle } from './SimpleModalStyle';
import BodyModal from './BodyModal';

const SimpleModal = () => {
    const [show, setShow] = useState(false);

    const onHideModal = () => setShow(false);

    return (
        <SimpleModalStyle>
            <div className='simple-modal'>
                <Button
                    className='open-button'
                    onClick={() => setShow(true)}
                    disabled={!!show ? true : ''}
                >
                    Open Simple Modal
                </Button>
                <BodyModal isShow={show} onHideModal={onHideModal} />
            </div>
        </SimpleModalStyle>
    )
}

export default SimpleModal;