const helloServiceStub = require('./services/hello')
const counterServiceStub = require('./services/counter')

helloServiceStub.hello({}, (error, message) => {
  if (!error) {
    console.log(message)
  } else {
    console.error(error)
  }
})

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
