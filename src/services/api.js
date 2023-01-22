import axios from 'axios'

const api = axios.get({
  baseURL: "http(s)://gateway.marvel.com/",
  responseType: "json",
  Params: {
    "apikey": "ff51f248dac0dd25c46a128dfebaa4368491a7c3",
    "ts": "a timestamp",
  }
})

export default api