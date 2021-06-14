const Modal = (props) => {
    const { isShow, children } = props;

    return (
        <div className='modal-container'
            style={{ opacity: isShow ? '1' : '0' }}
        >
            <div>{children}</div>
        </div>
    )
}

export default Modal;