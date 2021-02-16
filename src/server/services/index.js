const { service: HelloService, rpcs: HelloServiceRPCs } = require("./hello")
const { service: CounterService, rpcs: CounterServiceRPCs } = require("./counter")

function addServices(server) {
  server.addService(HelloService.service, HelloServiceRPCs)
  server.addService(CounterService.service, CounterServiceRPCs)
}

module.exports = {
  addServices
}

