import 'antd/dist/antd.css';
import { Button } from 'antd';

const Modal = (props) => {
    return (
        <>
            {!!props.show ?
                <div className='modal-container'>
                    <div>{props.children}</div>
                    <Button onClick={props.handleClose}>Close Modal</Button>
                </div> : ""}
        </>
    )
}

export default Modal;