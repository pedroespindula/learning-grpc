const path = require('path')
const grpc = require('grpc')
const { loadProto, grpc_address } = require('../util')

const PROTO_PATH = path.join(__dirname, '../../protos/counter.proto')

const CounterService = loadProto(PROTO_PATH).CounterService

const counterServiceStub = new CounterService(grpc_address,
    grpc.credentials.createInsecure())
    
module.exports = counterServiceStub
