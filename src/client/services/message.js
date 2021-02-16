const path = require('path')
const grpc = require('grpc')
const { loadProto, grpc_address } = require('../util')

const PROTO_PATH = path.join(__dirname, '../../protos/message.proto')

const MessageService = loadProto(PROTO_PATH).MessageService

const messageServiceStub = new MessageService(grpc_address,
    grpc.credentials.createInsecure())
    
module.exports = messageServiceStub
