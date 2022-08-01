import axios, { AxiosInstance } from 'axios'
import theMovieDB from '../../src/api/theMovieDB'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Tests in function theMovieDB.ts', () => {
  const api_key: string = 'd9a2c96458d3aa53d4cf3da5949038e6'
  const baseURL: string = 'https://api.themoviedb.org/3/movie'

  test('expect is Axios instance', () => {
    const movieDBInstance: AxiosInstance = mockedAxios.create({
      baseURL,
      params: {
        api_key
      }
    })
    expect(theMovieDB).toBe(movieDBInstance)
  })
})
