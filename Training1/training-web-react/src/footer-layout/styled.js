import styled from 'styled-components';

export const FooterStyled = styled.div`
    .footer-container{
        width: 100%;
        background-color: #F7F7F7;
        border-top: 1px solid #DDDDDD;
        padding-top: 30px;
        /* color: #222222; */
    }

    .main-menu-footer, .footer-ref{
        width: 85%;
        margin: 0 auto;
        padding: 20px 0;
    }

    h4{
        font-weight: 700;
    }

    .listul{
        list-style-type: none;
        line-height: 30px;

        & > li > a {
            color: #222222;

            &:hover{
                text-decoration: underline;
            }
        }
    }

    .main-menu-footer{
        display: flex;
        justify-content: space-between;

        & > .menu-footer{
            width: 250px;
        }
    }

    .footer-ref{
        border-top: 1px solid #DDDDDD;
        display: flex;
        justify-content: space-between;
        width: 85%;
        align-items: center;

        & > .option-footer{
            width: 40%;

            & > .listul{
                display: flex;
                justify-content: space-between;
                margin: 0;
            }
        }

        & > .icon-footer{
            display: flex;
            justify-content: space-between;
            width: 30%;
            font-size: 12pt;

            & > .icon{
                font-size: 14pt;
            }

            & > div > a{
                color: #222222;
                font-weight: 500;
                text-decoration: underline;
            }
        }
    }
`