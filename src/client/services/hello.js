const path = require('path')
const grpc = require('grpc')
const { loadProto, grpc_address } = require('../util')

const PROTO_PATH = path.join(__dirname, '../../protos/hello.proto')

const HelloService = loadProto(PROTO_PATH).HelloService

const helloServiceStub = new HelloService(grpc_address,
    grpc.credentials.createInsecure())
    
module.exports = helloServiceStub
