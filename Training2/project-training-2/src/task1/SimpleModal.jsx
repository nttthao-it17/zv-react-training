import 'antd/dist/antd.css';
import { useState } from 'react';
import { Button } from 'antd';

import { SimpleModalStyle } from './SimpleModalStyle';

const SimpleModal = () => {
    const [show, setShow] = useState(false);

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
                {
                    !!show ?
                        <div className='create-modal'>
                            <h1>THIS IS SIMPLE MODAL</h1>
                            <Button onClick={() => setShow(false)}>Close</Button>
                        </div> :
                        ''
                }
            </div>
        </SimpleModalStyle>
    )
}

export default SimpleModal;