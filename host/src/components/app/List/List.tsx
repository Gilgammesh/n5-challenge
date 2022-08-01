import React, { useContext, MutableRefObject } from 'react'
import { H3 } from '../../lib/H'
import List from './styles'
import { Movie, Serie } from '../../../interfaces/movieDBInterface'
import { AppContext } from '../../../contexts/AppContext'
import Hr from '../../lib/Hr'
import useSeriesMovies from '../../../hooks/useSeriesMovies'
// @ts-ignore
import animation from '../../../assets/animations/loading.gif'

interface IListProps {
  type: 'serie' | 'movie'
  title: string
}

const ListComponent = ({ type, title }: IListProps) => {
  const { lang, item, setItem } = useContext(AppContext)

  const { items, loading } = useSeriesMovies(type, lang)

  const handleSelectItem = (row: Serie | Movie) => {
    setItem({
      type,
      id: row.id,
      title: type === 'serie' ? (row as Serie).name : (row as Movie).title
    })
  }

  return (
    <List>
      <List.Title>
        <H3>{title}</H3>
      </List.Title>
      <Hr />
      {!loading &&
        items &&
        items.map((row: Serie | Movie, index: number) => {
          const urlImg = `https://image.tmdb.org/t/p/w500${row.poster_path}`
          return (
            <List.Item
              key={`${type}_${row.id}`}
              active={`${type}_${row.id}` === `${type}_${item.id}`}
              onClick={() => handleSelectItem(row)}
            >
              <List.ItemCount>{index + 1}</List.ItemCount>
              <List.ItemImage alt="" src={urlImg} />
              <List.ItemText>{type === 'serie' ? (row as Serie).name : (row as Movie).title}</List.ItemText>
            </List.Item>
          )
        })}
      {loading && (
        <List.Loading>
          <List.LoadingImage alt="" src={animation} />
        </List.Loading>
      )}
    </List>
  )
}

export default ListComponent
