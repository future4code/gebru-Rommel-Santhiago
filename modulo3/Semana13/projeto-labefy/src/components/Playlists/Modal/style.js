import styled from 'styled-components'

export const ModalList = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
`
  
  
export const ModalMain = styled.section`
    display: ${props => props.display};
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    position:fixed;
    background: #566573;
    width: 80%;
    min-height: 30%;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
`
  
export const Button = styled.div`
    display: flex;
    align-self: flex-end;
    position: absolute;
    border-radius: 45%;
    border: 1px solid red;
    background-color: red;
    padding: 0 10px;
    color: whitesmoke;
    right: 10px;
    top: 5px;
`