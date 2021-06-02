const Modal = (props) => {
    return (
        <div className='modal-container'>
            <div>{props.children}</div>
        </div>
    )
}

export default Modal;