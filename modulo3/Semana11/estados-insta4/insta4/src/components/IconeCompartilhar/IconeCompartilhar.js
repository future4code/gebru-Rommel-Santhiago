import * as React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import Facebook from '../../img/facebook.svg'
import Instagram from '../../img/instagram.svg'
import Twitter from '../../img/twitter.svg'

const style = {
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

const IconImage = styled.img`
	margin-right: 5px;
`
const SocialIcons = styled.div`
    display: flex;
    justify-content: space-around;
`

const ButtonImg = styled.button`
    display: flex;
    align-items: center;
    height: 24px;
    width: 24px;
    border: none;
    background-color: transparent;
`

const SocialIconImage = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px 0;
`

export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);  

    const [shared, setShared] = React.useState(false);

    return (
      <div>
        <IconImage alt={'Compartilhar'} src={props.icone} onClick={handleOpen}/>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3>
              Compartinhar
            </h3>
            <SocialIcons>
                <ButtonImg><SocialIconImage src={Facebook} alt='facebook' shared={shared} onClick={() => setShared(true, console.log("Post compartilhado no Facebook"))}/></ButtonImg>
                <ButtonImg><SocialIconImage src={Instagram} alt='instagram' onClick={() => setShared(true, console.log("Post compartilhado no Instagram"))}/></ButtonImg>
                <ButtonImg><SocialIconImage src={Twitter} alt='twitter' onClick={() => setShared(true, console.log("Post compartilhado no Twitter"))}/></ButtonImg>
            </SocialIcons>
          </Box>
        </Modal>
      </div>
    );
  }