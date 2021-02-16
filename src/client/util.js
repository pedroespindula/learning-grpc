const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

function loadProto(protoPath) {
  const packageDefinition = protoLoader.loadSync(protoPath)

  return grpc.loadPackageDefinition(packageDefinition)
}

const GRPC_HOST = process.env.GRPC_HOST || 'localhost'
const GRPC_PORT = process.env.GRPC_HOST || '9090'

const grpc_address = `${GRPC_HOST}:${GRPC_PORT}`

module.exports = {
  loadProto,
  grpc_address
}
