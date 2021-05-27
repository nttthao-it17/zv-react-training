import styled from 'styled-components';

export const ContentStyled = styled.div`
    .near-area, .anywhere, .host-coming, .discover{
        width: 85%;
        margin: 0 auto;
    }

    .title-part{
        font-weight: 700;
        font-size: 24pt;
    }

    .near-area{
        padding: 50px 0;

        & > .flex-area-flex{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    .anywhere{
        padding-bottom: 10px;

        & > .flex-container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .host-coming{
        display: flex;
        align-items: center;

        & > img {
            border-radius: 20px;
            margin: 30px 0;
        }

        & > .description-img{
            position: absolute;
            color: white;
            margin: 0 50px;

            & > .title-des{
                font-size: 35pt;
                font-weight: 600;
                max-width: 300px;
                line-height: 50px;
            }

            & > .suptitle-des{
                font-size: 14pt;
                max-width: 370px;
                line-height: 25px;
                padding-top: 12px;
            }

            & > Button {
                margin-top: 20px;
                padding: 23px 23px;
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 12pt;
                border-radius: 7px;
            }
        }
    }

    .discover{
        padding: 30px 0;

        & > .title {
            & > .title-part{
                line-height: 32px;
            }
        }

        & > .flex-discover{
            display: flex;
            justify-content: space-around;
        }
    }

    .area-container{
        width: 250px;

        & > a{
            display: flex;
            padding-bottom: 15px;
            color: rgba(0, 0, 0, 0.85);

            & > .title-area{
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 15px;
            }
        }
    }

    .discover-container{
        padding-top: 25px;
        width: 350px;

        & > a{
            color: rgb(34, 34, 34);

            & > .discover-title{
                font-size: 14pt;
                font-weight: 600;
            }
        }
    }
`