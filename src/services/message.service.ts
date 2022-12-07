import MessageDispatcher, { MessageService } from '@uncover/js-utils-microfrontend'

MessageDispatcher.start('MAD')
const MessageServiceCentral = new MessageService('MAS')

export default MessageServiceCentral