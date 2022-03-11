import React from 'react'
import { ModalMain, Button } from './style'

export default class Modal extends React.Component {
  render() {
    const showHide = this.props.show ? 'flex' : 'none'
  
    return (
        <ModalMain display={showHide}>
          {this.props.children}
          <Button type="button" onClick={this.props.handleClose}>
            X
          </Button>
        </ModalMain>
    )
  }
}