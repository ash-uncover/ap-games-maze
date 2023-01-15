import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'
import MessageDispatcher, { Message, MessageService } from '@uncover/ward'

MessageDispatcher.start()
const MessageServiceCentral = new MessageService()

export const useDispatchMessage = (dispatch?: Dispatch<AnyAction>) => {
  let dispatcher = dispatch || useDispatch()
  return (message: Message) => {
    dispatcher(message)
    MessageServiceCentral.sendMessage(message)
  }
}

export default MessageServiceCentral