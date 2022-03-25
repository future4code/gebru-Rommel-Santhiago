import React from 'react'

import * as Styled from './style'


const Matchs = (props) => {

    const showHideMatchs = props.show ? 'flex' : 'none'

    return  (
        <Styled.Container  display={showHideMatchs}>
            {props.children}
        </Styled.Container>
    )
}

export default Matchs