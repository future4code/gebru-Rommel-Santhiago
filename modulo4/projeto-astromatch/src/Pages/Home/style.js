import styled from 'styled-components'

export const Container = styled.div`
    max-width: 600px;
    height: 95vh;
    background-color: whitesmoke;
    border: 1px solid black;
    border-radius: 5px;
    position: absolute;
    top: 1em;
`

export const Content = styled.div`
    height: 91%;
    display: flex;
    background-color: ${props => props.backgroundColor};
`

export const List = styled.ul`
  width: 85%;
  padding: 0 10px;
`

export const ListItem = styled.li`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 5px;
  margin: 10px 0;
  list-style: none;
  transition: 0.2s;
  cursor: pointer;
  background: whitesmoke;
  border-radius: 5px;
  
  :hover {
    background: grey;
  }
  
  :last-child {
    border: unset;
  }
  
  :active {
			:before {
				height: 100%;
				width: 100%;
				top: 0;
    		left: 0;
    		position: absolute;
    		background-color: rgba(0, 0, 0, 0.1);
    		content: "";
			}
   }
`

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  background: url(${props => props.src});
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
`

export const ListText = styled.p`
  user-select: none;
`