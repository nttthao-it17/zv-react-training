import styled from "styled-components";

export const SearchStyled = styled.div`
  .container {
    margin: 0 auto;
    padding: 30px 0;
    width: 300px;
  }

  .btn-btn-loadMore{
        display: flex;
        justify-content: center;
        padding: 20px;

        & > button{
            padding: 10px;
            background-color: black;
            color: white;
            border: none;

            /* & :hover{
                color: black;
                background-color: white;
                border: 1px solid;
            } */
        }
    }
`;

export const ListCountryStyled = styled.div`
    .mapping-country{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .CountryList {
        width: 100%;
        padding-top: 20px;
        border-bottom: 1px solid #dad2d2;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .load-list, .country-details {
        width: 50%;
    }

    
`;
