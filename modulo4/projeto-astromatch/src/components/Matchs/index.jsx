import React from 'react'

import * as Styled from './style'


const Matchs = (props) => {

    const showHideMatchs = props.show ? '1' && 'flex' : '0' && 'none'

    return  (
        <Styled.Container  
            opacity={showHideMatchs}
            display={showHideMatchs}
        >
            {props.children}
        </Styled.Container>
    )
}

export default Matchs