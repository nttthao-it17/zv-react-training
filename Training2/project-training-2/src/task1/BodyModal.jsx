import 'antd/dist/antd.css';
import { Button } from 'antd';

const BodyModal = (props) => {
    const { isShow, onHideModal } = props;

    return (
        <div className='create-modal' style={{ opacity: isShow ? '1' : '0' }}>
            <h1>THIS IS SIMPLE MODAL</h1>
            <Button onClick={onHideModal}>Close</Button>
        </div>
    )
}

export default BodyModal;