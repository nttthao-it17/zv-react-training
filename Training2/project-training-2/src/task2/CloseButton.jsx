import 'antd/dist/antd.css';
import { Button } from 'antd';

const CloseButton = (props) => {
    return (
        <Button className='btn-close' onClick={props.handleClose}>Close Modal</Button>
    )
}

export default CloseButton;