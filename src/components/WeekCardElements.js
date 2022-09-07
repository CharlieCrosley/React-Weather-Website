import styled from 'styled-components'

export const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
`

export const CardContainer = styled.li`
    height: 180px;
    width: 100%;
    display: flex;
    padding-left: 3px;
    align-items: center;
`

export const Card = styled.div`
    width: ${({expand}) => expand ? "350px" : "180px"};
    height: 170px;
    -webkit-backdrop-filter: blur(12px);  /* Safari 9+ */
    backdrop-filter: blur(12px); /* Chrome and Opera */
    border-radius: 7px;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, .3);
    cursor: pointer;
    margin-right: 10px;
    transition: all 0.1s linear;

    &:hover {
        background-color: rgba(31, 68, 165, 0.5);
    }
`

export const DateTime = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${({expand}) => expand ? 'space-around' : 'space-evenly'} ;
    height: 50px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    padding-top: 10px;
    text-shadow: 1px 0px 2px black;
`

export const WeatherInfo = styled.div`
    display: flex;
    text-shadow: 1px 0px 2px black;
`

export const Temperature = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    color: white;
    padding-top: 12px;
    margin-left: ${({expand}) => expand ? '0' : '36px'};
    transition: all 0.1s linear;
`

export const WeatherIcon = styled.div`
    position: relative;
    bottom: 26px;
`

export const WeatherStatus = styled.div`
    display: ${({expand}) => expand ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
    width: 50%;
    color: white;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 22px;
    font-size: 20px;
    text-align: center;
`