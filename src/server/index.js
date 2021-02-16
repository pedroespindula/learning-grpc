const grpc = require('grpc')
const path = require('path')

const server = new grpc.Server();

const { addServices } = require('./services/')

addServices(server)

const HOST = process.env.HOST || '127.0.0.1'
const PORT = process.env.PORT || '9090'

const address = `${HOST}:${PORT}`

server.bind(address, grpc.ServerCredentials.createInsecure())
console.log(`Server running at http://${address}`)
server.start()
