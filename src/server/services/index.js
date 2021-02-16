const { service: HelloService, rpcs: HelloServiceRPCs } = require("./hello")
const { service: CounterService, rpcs: CounterServiceRPCs } = require("./counter")
const { service: MessageService, rpcs: MessageServiceRPCs } = require("./message")

function addServices(server) {
  server.addService(HelloService.service, HelloServiceRPCs)
  server.addService(CounterService.service, CounterServiceRPCs)
  server.addService(MessageService.service, MessageServiceRPCs)
}

module.exports = {
  addServices
}

