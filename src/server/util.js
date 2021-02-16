const grpc = require('grpc')
const protoLoader = require('@grpc/proto-loader')

function loadProto(protoPath) {
  const packageDefinition = protoLoader.loadSync(protoPath)

  return grpc.loadPackageDefinition(packageDefinition)
}

module.exports = {
  loadProto
}
