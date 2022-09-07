import styled from 'styled-components'

export const CurrentWeatherContainer = styled.div`
    height: 300px;
    display: flex;
    margin-top: 20px;
    margin-bottom: 15px;
    width: 90%;
    text-shadow: 0px 0px 2px black;
    z-index: 1;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: space-between;
        height: 640px;
        align-items: center;
    }
`

export const CurrentWeatherDetails = styled.div`
    -webkit-backdrop-filter: blur(12px);  /* Safari 9+ */
    backdrop-filter: blur(12px); /* Chrome and Opera */
    
    border-radius: 7px;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, .3);
    width: 40%;
    min-width: 330px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    color: white;

    @media screen and (max-width: 900px) {
        width: 80%;
    }
`

export const CurrentLocation = styled.div`
    display: flex;
    padding-left: 20px;
    padding-top: 2px;
    font-size: 20px;
    font-weight: 500;
    color: #dedede;
`

export const CurrentCountry = styled.div`
    font-size: 15px;
    padding-top: 5px;
    font-weight: 600;
    padding-right: 8px;
`

export const CurrentTempContainer = styled.div`
    display: flex;
`

export const CurrentTemperature = styled.div`
    width: 50%;
    display: grid;
    grid-template-columns: 100px 100px;
    grid-template-rows: 70px 30px;
    justify-content: center;
    padding-top: 15px;
`

export const TempValue = styled.div`
    position: relative;
    bottom: 5px;
    display: flex;
    font-size: 20px;
`

export const SubTemp = styled.div`
    font-size: 14px;
    padding-left: 50px;
    font-weight: bold;
    color: #dedede;
`

export const CurrentWeatherStatus = styled.div`
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 10px;
    width: 100%;
    font-size: 24px;
    font-weight: bold;
`

export const CurrentWeatherExtraInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const ExtraInfoWrap = styled.div`
    height: 45%;
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

export const ExtraInfoName = styled.div`
    font-weight: bold;
`