const { loadProto } = require('../util')
const path = require('path')

const PROTO_PATH = path.join(__dirname, '../../protos/message.proto')

const MessageService = loadProto(PROTO_PATH).MessageService

let message = 'EMPTY'

function callback_message(callback) {
  callback(null, { content: message })
}

function setMessage(req, callback) {
  message = req.request.content;

  callback_message(callback)
}

function getMessage(_, callback) {
  callback_message(callback)
}

module.exports = {
  service: MessageService,
  rpcs: {
    setMessage,
    getMessage
  }
}

