import styled from 'styled-components'
import { Content } from '../../pages/Home/style'

export const Container = styled(Content)`
    
`

export const Title = styled.h2`
    color: whitesmoke;
    margin: 0.5em 0 0 1em;
`

export const ContentCard = styled.div`
  display: flex;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: yellow;
`

export const Cover = styled.div`
  border: 5px solid #DE3163;
  height: 300px;
  width: 300px;
  border-radius: 50%;
  background-image: url("https://picsum.photos/200/300?a=1");
  background-repeat: no-repeat;
  background-size: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CoverBackground = styled.div`
  width: 10%;
  height: 10%;
  border: 10px solid #DE3163;
  border-radius: 50%;
  background-color: #1C2833;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-top: -15vh;
  margin-bottom: 15vh;
  border-radius: 5px;
  background-color: #DE3163;
  font-weight: bold;
  padding: 0 10px;
  color: whitesmoke;
`

export const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 150,
  textAlign: 'center',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const Img = styled.img`
  width: 100%;
  height: 100%;
`

export const Button = styled.button`
  margin: 10px 5px;
  background-color: ${props => props.backgroundColor};
  border: currentColor;
  font-weight: bold;
  color: ${props => props.color};
  padding: 3px;
  right: ${props => props.right};
`

export const Span = styled.span`
  font-weight: bold;
  font-size: 1.5em;
`