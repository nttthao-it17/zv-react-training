import styled from 'styled-components';

export const CoundownStyled = styled.div`
    .container{
        width: 70%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .typing-number{
        line-height: 30px;

        & > input {
            border: none;
            border-bottom: 1px solid lightsteelblue;
            padding: 3px 10px;
        }
    }

    .btn-start{
        margin: 10px 0;
    }

    .countdown{
        border: 1px solid lightsteelblue;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        width: 65%;
        align-items: center;
        margin-top: 20px;
        background-color: #c0c2de;

        & > p {
            margin-top: 0;
            margin-bottom: 1em;
            width: 75px;
            height: 75px;
            border: 1px solid;
            border-radius: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            font-weight: 600;
        }
    }
`