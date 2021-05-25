import axios from 'axios'

export default {
  fetchMenu() {
    return axios.get('').then(response => response.data)
  }
}
