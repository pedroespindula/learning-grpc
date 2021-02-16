const helloServiceStub = require('./services/hello')
const counterServiceStub = require('./services/counter')
const messageServiceStub = require('./services/message')

function mainHelloService() {
  helloServiceStub.hello({}, (error, message) => {
    if (!error) {
      console.log(message)
    } else {
      console.error(error)
    }
  })
}

function mainCounterService() {
  counterServiceStub.increment({}, (error, message) => {
    console.log(message)

    counterServiceStub.increment({}, (error, message) => {
      console.log(message)

      counterServiceStub.increment({}, (error, message) => {
        console.log(message)

        counterServiceStub.decrement({}, (error, message) => {
          console.log(message)

          counterServiceStub.zero({}, (error, message) => {
            console.log(message)
          })
        })
      })
    })
  })
}

function mainMessageService() {
  messageServiceStub.getMessage({}, (error, message) => {
    console.log(message)

    messageServiceStub.setMessage({ content: "Essa é uma mensagem" }, (error, message) => {
      console.log(message)

      messageServiceStub.getMessage({}, (error, message) => {
        console.log(message)
      })
    })
  })
}

mainHelloService()
mainCounterService()
mainMessageService()
