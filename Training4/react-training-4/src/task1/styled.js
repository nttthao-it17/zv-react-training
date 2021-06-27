import styled from 'styled-components';

export const JokeStyled = styled.div`
    .container{
        display: flex;
        justify-content: center;
        background-color: blueviolet;
        width: 100%;
        min-height: 100vh;
    }

    .box{
        width: 55%;
        height: 250px;
        background-color: white;
        margin: auto 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 50px;
    }

    .button{
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        font-size: 16px;
        margin: 4px 2px;
    }
`