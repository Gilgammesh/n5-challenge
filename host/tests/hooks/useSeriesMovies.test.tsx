import { renderHook } from '@testing-library/react'
import useSeriesMovies from '../../src/hooks/useSeriesMovies'

describe('Tests in hook: useSeriesMovies.tsx', () => {
  test('You must return a list of series or movies', () => {
    const results = [
      {
        adult: false,
        backdrop_path: '/p1F51Lvj3sMopG948F5HsBbl43C.jpg',
        genre_ids: [28, 12, 14],
        id: 616037,
        original_language: 'en',
        original_title: 'Thor: Love and Thunder',
        overview:
          'Cuarta película sobre "Thor" del MCU, en la que el Dios del trueno contará con Lady Thor como acompañante, personaje que interpretará Natalie Portman.',
        popularity: 18650.943,
        poster_path: '/ehSQcx7fYCRe92FPRdOjVjlgM3W.jpg',
        release_date: '2022-07-06',
        title: 'Thor: Love and Thunder',
        video: false,
        vote_average: 6.7,
        vote_count: 1506
      },
      {
        adult: false,
        backdrop_path: '/qTkJ6kbTeSjqfHCFCmWnfWZJOtm.jpg',
        genre_ids: [10751, 16, 12, 35, 14],
        id: 438148,
        original_language: 'en',
        original_title: 'Minions: The Rise of Gru',
        overview:
          'Mucho antes de convertirse en un genio del mal, Gru no era más que un chaval de 12 años en plenos años 70 tratando de conquistar el mundo desde el sótano de su casa de un barrio residencial cualquiera. Y no le iba demasiado bien. Pero cuando Gru se cruza en su camino con Kevin, Stuart, Bob, y Otto —un nuevo Minion con aparato en los dientes y desesperado por sentirse aceptado—, esta inesperada familia unirá fuerzas para construir su primera guarida, diseñar sus primeras armas y llevar a cabo sus primeras misiones.',
        popularity: 8255.85,
        poster_path: '/zBk0guZ6NI2aHclb4sbrQdrrnOC.jpg',
        release_date: '2022-06-29',
        title: 'Minions: El origen de Gru',
        video: false,
        vote_average: 7.5,
        vote_count: 555
      }
    ]
    const type = 'movie'
    const lang = 'es'
    const { result } = renderHook(() => useSeriesMovies(type, lang))
    const { items } = result.current
    expect(items).toBe(results)
  })
})
