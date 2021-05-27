import styled from 'styled-components';

export const DivStyled = styled.div`

    background-color: #222222;
    width: 100%;
    min-height: 500px;

    .content-covid{
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > a > span{
            color: #A3A3A3;
            text-decoration: underline;
            font-weight: 500;

            &:hover{
                color: #A3A3A3CC;
            }
        }
    }

    .set-background{
        background-image: url("https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        min-height: 520px;
    }

    .nav-menu-web{

        display: flex;
        width: 85%;
        height: 80px;
        margin: auto;
        justify-content: space-between;
        align-items: center;

        

        /* &::after{
            position: sticky;
            top: 0;
            z-index: 1;
            background-color: white;
            width: 100%;
        } */
    }

    .logo-web{
        & > a{
            color: black;
        }
    }

    .menu-list{
        font-size: 16px;

        & > ul{
            width: 445px;
            display: flex;
            justify-content: space-evenly;
            flex-direction: row;
            margin: auto 0;
            list-style-type: none;
            width: 445px;
            text-align: center;

            & > li > a{
                color: black;
                opacity: 1;

                &:hover{
                    opacity: 0.8;
                }

                &:active{
                    border-bottom: 1px solid black;
                    cursor: default;
                }
            }
        }
    }

    .header-button {
        & > button{
            font-weight: 600;
            color: black;
        }
        /* box-shadow: 0px 2px 4px rgb(0 0 0 / 18%) !important */

        .coming-host-btn{
            background-color: transparent;

            &:hover{
                background-color: #fdfbfbc8;
                border-radius: 50px;
            }
        }

        .global-icon-btn{
            border: none;
            box-shadow: none;
            color: black;
            background-color: transparent;
            width: 38px;
            height: 30px;

            &:hover{
                background-color: #fdfbfbc8;
                border-radius: 15px;
            }
        }

        .user-icon-btn{
            background-color: white;
            border-color: white;
            height: 40px;
            margin-left: 15px;
            box-shadow: 0px 2px 4px rgb(0 0 0 / 18%) !important;
        }
        
    }

    .text-content{
        width: 85%;
        margin: auto;
        position: relative;
        top: 70px;

        & > h1{
            line-height: 42px;
            font-size: 40pt;
            width: 295px;
        }

        & > h3{
            width: 230px;
        }

        & > Button{
            background-color: #222222;
            color: white;
            border-color: black;
            font-weight: 600;
            border-radius: 7px;
        }
    }

    .form-search{
        height: 62px;
        display: flex; 
        justify-content: center;

    }

    .form-control{
        border: 1px solid transparent;
        background-color: white;
        width: 65%;
        display: flex;
        justify-content: space-between;
        border-radius: 50px;
        align-items: center;

        & > div{
            display: flex;
            flex-direction: column;

            & > label{
                font-size: 9pt;
                font-weight: 700;
            }
        }

        & > Button{
            margin-right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #FF385C;
            color: white;
        }
    }
    
    .place-input{
        margin: 0 25px;

        & > input:focus{
            border-color: white;
            /* background-color: red; */
        }
    }
    
    .date-input{
        border-left: 1px solid #cbc9c9;
        padding-left: 22px;
    }

`
