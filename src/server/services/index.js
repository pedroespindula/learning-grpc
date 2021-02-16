const { service: HelloService, rpcs: HelloServiceRPCs } = require("./hello")

function addServices(server) {
  server.addService(HelloService.service, HelloServiceRPCs)
}

module.exports = {
  addServices
}

