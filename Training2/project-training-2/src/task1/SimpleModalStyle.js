import styled from "styled-components";

export const SimpleModalStyle = styled.div`
  .simple-modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & > .open-button{
        margin-bottom: 20px;
    }
  }

  .create-modal{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
