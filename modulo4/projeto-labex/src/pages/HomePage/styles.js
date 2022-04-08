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
`

export const ArrowDown = styled.img`
    width: 50px;
    margin: 30px 0 10px 0;
`

export const ContentMain = styled.div`
    width: 60%;
    height: 400px;
    display: flex;
    justify-content: space-around;
`

export const Footer = styled.footer`
    height: 20vh;
    text-align: center;
`

export const Title = styled.h2`
    padding: 3em 0 0 0;
    color: #4D4D4D;
`