const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('PROMISE RESOLVED')
    }, 3000)
})

function somethingSomething(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            resolve('PROMISE RESOLVED', message)
        }, delay)
    })
}
function somethingSomethingRej(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            reject('PROMISE REJECTED', message)
        }, delay)
    })
}

promise1
    .then((res) => console.log(res))
    .catch((err) => console.log('ERROR', err))
    .then(() => {
        return somethingSomething('P2', 4000)
    })
    .catch((err) => console.log('ERROR', err))

    .then(() => {
        return somethingSomethingRej('P3', 3000)
    })
    .catch((err) => console.log('ERROR', err))

    .then(() => {
        return somethingSomething('P4', 1000)
    })
    .catch((err) => console.log('ERROR', err))


