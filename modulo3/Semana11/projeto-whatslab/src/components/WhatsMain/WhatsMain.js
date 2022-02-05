import React from 'react'
import { MessageContainer, ContentMessages, ContentMessage, ContentMessageUser, FormMessage, UserInput, TextInput, ButtonForm, NameUser, Mensagem, ButtonDelete } from './Styled.js'

export default class WhatsMain extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
          userValue: '',
          textValue: '',
          messageState: []
        }
    }

    onChangeUser = (event) => {
        this.setState({userValue: event.target.value})
    }
    
    onChangeText = (event) => {
        this.setState({textValue: event.target.value})
    }

    onSendMessage = () => {
        const newMessage = {
            id: Math.random(),
            user: this.state.userValue,
            text: this.state.textValue
        }

        const message = [...this.state.messageState, newMessage]

        this.setState({messageState: message})

        this.setState({textValue: ''})
    }

    onDeleteMessage = (idMessageToDelete) => {
        const oldMessage = [...this.state.messageState]

        const newMessageList = oldMessage.filter((message) => {
            return message.id !== idMessageToDelete
        })
        this.setState({messageState: newMessageList})
    }

    enterKeyPress = (eventKey) => {
        if (eventKey.key === "Enter") {
            eventKey.preventDefault();
            return this.onSendMessage()
        }
    }

    render() {
        const messages = this.state.messageState.map((message) => {

            if(message.user === "eu"){
                return  <ContentMessageUser key={message.id}>
                            <Mensagem>
                                {message.text}
                                <ButtonDelete onClick={  () => this.onDeleteMessage(message.id) }><sup>🔻</sup></ButtonDelete>
                            </Mensagem>
                        </ContentMessageUser>
            } else {
                return  <ContentMessage key={message.id}>
                            <NameUser>{message.user} ➣</NameUser>
                            <Mensagem>
                                {message.text}
                                <ButtonDelete onClick={  () => this.onDeleteMessage(message.id) }><sup>X</sup></ButtonDelete>
                            </Mensagem>
                        </ContentMessage>
            }
        })

        return (
            <MessageContainer>
                <ContentMessages>
                    {messages}
                </ContentMessages>
                <FormMessage>
                    <UserInput 
                    type="text" placeholder={'Usuário'} onKeyPress={this.enterKeyPress}
                    onChange={this.onChangeUser} value={this.state.userValue}
                    />
                    <TextInput 
                    type="text" placeholder={'Mensagem'} onKeyPress={this.enterKeyPress}
                    onChange={this.onChangeText} value={this.state.textValue}
                    />
                    <ButtonForm type="submit" onClick={this.onSendMessage}>
                        ENVIAR
                    </ButtonForm>
                </FormMessage>
            </MessageContainer>
        )
    }
}