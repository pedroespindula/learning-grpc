const path = require('path')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = path.join(__dirname, '../protos/notes.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const NoteService = grpc.loadPackageDefinition(packageDefinition).NoteService

const GRPC_HOST = process.env.GRPC_HOST || 'localhost'
const GRPC_PORT = process.env.GRPC_HOST || '9090'

const grpc_address = `${GRPC_HOST}:${GRPC_PORT}`

const client = new NoteService(grpc_address,
    grpc.credentials.createInsecure())
    
module.exports = client
