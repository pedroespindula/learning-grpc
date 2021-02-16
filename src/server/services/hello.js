const { loadProto } = require('../util')
const path = require('path')

const PROTO_PATH = path.join(__dirname, '../../protos/hello.proto')

const HelloService = loadProto(PROTO_PATH).HelloService

function hello(_, callback) {
  callback(null, {content: "Hello World"})
}

module.exports = {
  service: HelloService,
  rpcs: {
    hello
  }
}

