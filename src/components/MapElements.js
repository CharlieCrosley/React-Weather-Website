import styled from 'styled-components'

export const WeatherMap = styled.div`
    width: 60%;
    height: 300px;
    margin-left: 20px;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .3);
    border-radius: 7px;
    min-width: 350px;
    display: flex;
    position: relative;
    justify-content: flex-end;
    

    @media screen and (max-width: 900px) {
        margin-top: 20px;
        width: 80%;
        margin-left: 0;
        min-width: 330px;
    }
`

export const MapTypeContainer = styled.div`
    position: absolute;
    width: 40px;
    height: 210px;
    right: 5px;
    top: 4px;
`

export const MapTypes = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MapType = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 40px;
    font-size: 28px;
    color: white;
    filter: drop-shadow(0px 0px 1px black);
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: rgba(120,120,120,1);
    }
`

export const MapTypeBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 7px;
    -webkit-backdrop-filter: blur(4px);  /* Safari 9+ */
    backdrop-filter: blur(4px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 0.45);
`



export const MapHelpWrap = styled.div`
    position: absolute;
    left: 5px;
    top: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    /* Background Blur */
    -webkit-backdrop-filter: blur(4px);  /* Safari 9+ */
    backdrop-filter: blur(4px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 0.45);

    border-radius: 7px;
    cursor: pointer;
`

export const ToolTipText = styled.span`
    visibility: ${({hovered}) => hovered ? "visible" : "hidden"};
    width: 120px;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Background Blur */
    -webkit-backdrop-filter: blur(4px);  /* Safari 9+ */
    backdrop-filter: blur(4px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 0.45);
    
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
    left: 43px;
    top: 4px;

    &::after {
        content: " ";
        position: absolute;
        right: 100%; /* To the left of the tooltip */
        top: 9px;
        border-width: 6px;
        border-style: solid;
        border-color: transparent rgba(100, 100, 100, 0.45) transparent transparent;
    }
`

export const MapHelp = styled.div`
    color: white;
    filter: drop-shadow(0px 0px 1px black);
    font-size: 18px;
    margin-top: 3px;
    margin-left: 0px;
`