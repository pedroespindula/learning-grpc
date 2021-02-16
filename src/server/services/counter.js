const { loadProto } = require('../util')
const path = require('path')

const PROTO_PATH = path.join(__dirname, '../../protos/counter.proto')

const CounterService = loadProto(PROTO_PATH).CounterService

let counter = 0

function callback_counter(_, callback) {
  callback(null, { current: counter })
}

function increment(_, callback) {
  counter += 1;

  callback_counter(_, callback)
}

function decrement(_, callback) {
  counter -= 1;

  callback_counter(_, callback)
}

function zero(_, callback) {
  counter = 0;

  callback_counter(_, callback)
}

module.exports = {
  service: CounterService,
  rpcs: {
    increment,
    decrement,
    zero
  }
}

