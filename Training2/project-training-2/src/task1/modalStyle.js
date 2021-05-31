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
        margin: 20px;
        padding: 10px;
        display: flex;
        flex-direction: column;

        & > div {
            height: 80%;
        }

        & > Button {
            margin: 0 auto;
            display: flex;
        }
    }
`