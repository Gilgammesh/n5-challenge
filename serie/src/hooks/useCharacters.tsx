import { useState, useEffect } from 'react'
import movieDB from '../api/theMovieDB'
import { MovieDBResponse, Cast } from '../interfaces/movieDBInterface'

const useCharacters = (id: number, lang: 'es' | 'en') => {
  const [characters, setCharacters] = useState<Cast[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    let language: string = lang === 'es' ? 'es-ES' : 'en-US'
    const getCharacters = async () => {
      try {
        const response = await movieDB.get<MovieDBResponse>(`/${id}/credits?language=${language}`)
        if (mounted && response.status) {
          setCharacters(response.data.cast)
        }
        setLoading(false)
      } catch (e) {
        setError(e as string)
        setLoading(false)
      }
    }
    getCharacters()
    return () => {
      mounted = false
    }
  }, [id, lang])

  return { characters, loading, error }
}

export default useCharacters
