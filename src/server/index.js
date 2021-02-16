const path = require('path')
const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

const PROTO_PATH = path.join(__dirname, '../protos/notes.proto')

const packageDefinition = protoLoader.loadSync(PROTO_PATH)
const notesProto = grpc.loadPackageDefinition(packageDefinition)

const notes = [
    { id: '1', title: 'Note 1', content: 'Content 1' },
    { id: '2', title: 'Note 2', content: 'Content 2' }
]

const server = new grpc.Server();

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '9090'

const address = `${HOST}:${PORT}`

server.addService(notesProto.NoteService.service, {
    list: (_, callback) => {
        callback(null, notes)
    },
})
server.bind(address, grpc.ServerCredentials.createInsecure())
console.log(`Server running at http://${address}`)
server.start()
