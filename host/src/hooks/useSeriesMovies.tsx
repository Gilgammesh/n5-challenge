import { useState, useEffect } from 'react'
import movieDB from '../api/theMovieDB'
import { MovieDBResponse, Movie, Serie } from '../interfaces/movieDBInterface'

const useSeriesMovies = (type: 'serie' | 'movie', lang: 'es' | 'en') => {
  const [items, setItems] = useState<Movie[] | Serie[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    const limit: number = 10
    let language: string = lang === 'es' ? 'es-ES' : 'en-US'
    const getItems = async () => {
      try {
        const response = await movieDB.get<MovieDBResponse>(
          `/${type === 'serie' ? 'tv' : type}/popular?language=${language}`
        )
        if (mounted && response.status) {
          setItems(response.data.results.slice(0, limit))
        }
        setLoading(false)
      } catch (e) {
        setError(e as string)
        setLoading(false)
      }
    }
    getItems()
    return () => {
      mounted = false
    }
  }, [type, lang])

  return { items, loading, error }
}

export default useSeriesMovies
