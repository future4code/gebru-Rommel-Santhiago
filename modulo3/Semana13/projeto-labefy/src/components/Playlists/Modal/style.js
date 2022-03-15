import styled from 'styled-components'

export const Container = styled.section`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    border: 10px solid #DE3163;
    border-radius: 5px;
    background: #1c2833bd;
    padding: 10px;
    width: 80%;
    max-height: 60%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`
  
export const Button = styled.div`
    display: flex;
    align-self: flex-end;
    position: absolute;
    font-weight: bold;
    font-size: 1.2em;
    border-radius: 10px;
    // border: 1px solid #DE3163;
    background-color: #566573;
    padding: 0 10px;
    color: #DE3163;
    right: 10px;
    top: 5px;
`