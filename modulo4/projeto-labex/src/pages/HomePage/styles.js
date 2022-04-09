import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
    width: 100%;
    height: 45vh;
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

export const Content = styled.div`
    width: 40%;
    display: flex;
    float: left;
    position: absolute;
    left: 10%;
`

export const Title = styled.h1`
    font-family: 'Freestyle Script', sans-serif;
    font-weight: bold;
    font-size: 12em;
`

const shake = keyframes`
    0%   {left: 0px; top: 20px;}
    25%  {left: 20px; top: 0px;}
    50%  {left: 0px; top: 20px;}
    75%  {left: 20px; top: 0px;}
    100% {left: 0px; top: 20px;}
`

export const Vibrate = styled.div`
    position: relative;
    animation: ${shake} infinite 5s;
    animation-direction: alternate;
`

export const Img = styled.img`
    width: 200px
`

export const AdminIcon = styled.img`
    width: 15px;
    margin-right: 5px;
`

export const Main = styled.main`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    background-size: 100%;
`

export const ArrowDown = styled.img`
    width: 50px;
    margin: 10px 0;
`

export const ContentMain = styled.div`
    width: 60%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    margin-top: -100px;
`

export const Footer = styled.footer`
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubTitle = styled.h2`
    color: #4D4D4D;
`