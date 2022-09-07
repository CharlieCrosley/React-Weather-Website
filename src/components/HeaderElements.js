import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;
    color: #fff;
`

export const SearchContainer = styled.div`
    width: 90%;
    height: 70px;
    position: absolute;
    z-index: 999;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
        align-items: center;
    }
`

export const SearchWrap = styled.div`
    -webkit-backdrop-filter: blur(12px);  /* Safari 9+ */
    backdrop-filter: blur(12px); /* Chrome and Opera */
    box-shadow: inset 0 0 0 200px rgba(100, 100, 100, 0.6);
    border-radius: 14px;
    border: 1px solid rgba(0,0,0, 0.25);
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, .2);
    width: 27%;
    min-width: 400px;
    margin-top: 20px;

    @media screen and (max-width: 900px) {
        width: 60%;
        min-width: 330px;
    }
` 

export const SearchBar = styled.div`
    display: flex;
    height: 35px;
` 

export const ResultsContainer = styled.div`
    display: ${props => props.show ? "flex" : "none"};  
` 

export const HeaderSearch = styled.input`
    padding-left: 20px;
    font-size: 15px;
    font-weight: 600;
    width: 400px;
    display: flex;
    border: none;
    background: none;
    outline: none;
    color: #fff;
    text-shadow: 0px 0px 2px black;

    &:focus {
        border-radius: ${({resultsDisplayed}) => resultsDisplayed ? "7px 7px 0px 0px" : "7px"};
    }

    &::placeholder {
        color: #d3d3d3;
    }
`

export const SearchIcon = styled.ul`
    position: absolute;
    top: 9px;
    right: 12px;
    size: 19px;
`

export const SearchResults = styled.ul`
    width: 100%;
    list-style: none;
`

export const SearchResultRow = styled.li`
    padding-left: 20px;
    font-weight: 600;
    cursor: pointer;
    text-shadow: 0px 0px 2px black;
    height: 40px;

    &:hover {
        background-color: rgba(0,0,0,0.1);
        border-radius: ${({roundBottom}) => roundBottom ? "0 0 14px 14px" : "0"};
    }
`