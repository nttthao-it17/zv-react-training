import styled from 'styled-components';

export const ModalStyle = styled.div`
    .modal-main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .modal-container{
        width: 35%;
        height: 100px;
        border: 1px solid #327ae6;
        padding: 10px;
        margin-top: 20px;
    }

    .btn-close{
        display: flex;
        margin: 0 auto;
        position: relative;
        top: 28px;
    }
`