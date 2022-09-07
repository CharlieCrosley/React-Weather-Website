import styled from 'styled-components'

export const HomeContainer = styled.div`
background-color: #1f4494;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: auto;

    &:before {
        content: "";
        position: absolute;
        top: 37px;
        left: 0;
        right: 0;
        height: 900px;
        background-color: #1f4494;
        //background-color: #4f71f2; //708cf4
        mask-image: linear-gradient(to top, rgb(0,0,0) 70%, transparent 100%);

        @media screen and (max-width: 900px) {
            top: 100px;
        }
        color: #1f4494;
    }
`