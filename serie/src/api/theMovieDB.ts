import axios from 'axios'

const api_key: string = 'd9a2c96458d3aa53d4cf3da5949038e6'
const baseURL: string = 'https://api.themoviedb.org/3/tv'

const movieDB = axios.create({
  baseURL,
  params: {
    api_key
  }
})

export default movieDB
