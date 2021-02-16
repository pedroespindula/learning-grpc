const helloServiceStub = require('./services/hello')

helloServiceStub.hello({}, (error, message) => {
    if (!error) {
        console.log(message)
    } else {
        console.error(error)
    }
})
