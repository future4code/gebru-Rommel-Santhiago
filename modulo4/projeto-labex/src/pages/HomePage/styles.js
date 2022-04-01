import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 50vh;
    padding: 50px 0;
    background-color: #4D4D4D;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: 100%; 
`

export const Buttons = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    right: 50px;
`

export const Button = styled.button`
    width: 100px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    background: ${props => props.background};
    border: none;
    border-radius: 10px;
    color: ${props => props.color};
    &&: hover {
        background: ${props => props.hoverBg};
        color: ${props => props.hoverColor};
    }
`

export const AdminIcon = styled.img`
    width: 15px;
    margin-right: 5px;
`

export const Main = styled.main`
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #CCCCCC;
`

export const ArrowDown = styled.img`
    width: 50px;
    margin: 30px 0 10px 0;
`

export const ButtonMore = styled.button`
    width: 150px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    background: #4D4D4D;
    border: none;
    border-radius: 10px;
    color: #CCCCCC;
    &&: hover {
        background: #666666;
        color: #CCCCCC;
    }
`

export const ContentMain = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-around;
`

export const Footer = styled.footer`
    height: 20vh;
    background-color: #CCCCCC;
`