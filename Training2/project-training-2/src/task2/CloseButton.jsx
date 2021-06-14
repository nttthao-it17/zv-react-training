import 'antd/dist/antd.css';
import { Button } from 'antd';

const CloseButton = ({ handleClose }) => {
    return (
        <Button className='btn-close' onClick={handleClose}>Close Modal</Button>
    )
}

export default CloseButton;