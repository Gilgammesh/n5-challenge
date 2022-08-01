import React, { useContext, useRef, useEffect } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import { H1 } from '../../lib/H'
import Home from './styles'
import List from '../List'
import Hr from '../../lib/Hr'
// @ts-ignore
import SerieCharacters from 'serie/Characters'
// @ts-ignore
import MovieCharacters from 'movie/Characters'

const HomeComponent = () => {
  const { lang, item } = useContext(AppContext)

  const refCharacters = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (item.type) {
      refCharacters.current?.scrollIntoView()
    }
  }, [item])

  return (
    <Home>
      <Home.Title>
        <H1>
          {lang === 'es'
            ? 'Aplicación de Personajes en Series y Películas'
            : 'Application of Characters in Series and Movies'}
        </H1>
      </Home.Title>
      <Home.Lists>
        <Home.List>
          <List type="serie" title={lang === 'es' ? 'Series Populares' : 'Popular Series'} />
        </Home.List>
        <Home.List>
          <List type="movie" title={lang === 'es' ? 'Películas Populares' : 'Popular Movies'} />
        </Home.List>
      </Home.Lists>
      <Hr />
      <Home.Characters ref={refCharacters}></Home.Characters>
      {item.type === 'serie' && <SerieCharacters lang={lang} id={item.id} title={item.title} />}
      {item.type === 'movie' && <MovieCharacters lang={lang} id={item.id} title={item.title} />}
    </Home>
  )
}

export default HomeComponent
