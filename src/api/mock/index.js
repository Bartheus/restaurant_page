import burgers from './data/burgers'

const fetch = (mockData, time = 0) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchMenu() {
    return fetch(burgers, 1000)
  }
}
