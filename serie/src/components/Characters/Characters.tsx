import React from 'react'
import useCharacters from '../../hooks/useCharacters'
import { H2 } from '../H'
import Characters from './styles'
// @ts-ignore
import animation from '../../assets/animations/loading.gif'
import { Cast } from '../../interfaces/movieDBInterface'

interface IProps {
  lang: 'es' | 'en'
  id: number
  title: string
}

const CharactersComponent = ({ lang, id, title }: IProps) => {
  const { characters, loading } = useCharacters(id, lang)

  return (
    <Characters>
      <Characters.Title>
        {lang === 'es' ? <H2>Personajes de la Serie {title}</H2> : <H2>Characters from the Serie {title}</H2>}
      </Characters.Title>
      {!loading && characters && (
        <Characters.Table>
          <Characters.TableHead>
            <Characters.TableHeadTr>
              <Characters.TableHeadTh>#</Characters.TableHeadTh>
              <Characters.TableHeadTh>{lang === 'es' ? 'Foto' : 'Photo'}</Characters.TableHeadTh>
              <Characters.TableHeadTh>{lang === 'es' ? 'Personaje' : 'Character'}</Characters.TableHeadTh>
              <Characters.TableHeadTh>{lang === 'es' ? 'Actor / Actriz' : 'Actor / Actress'}</Characters.TableHeadTh>
            </Characters.TableHeadTr>
          </Characters.TableHead>
          <Characters.TableBody>
            {characters.map((row: Cast, index: number) => {
              const urlImg = `https://image.tmdb.org/t/p/w500${row.profile_path}`
              return (
                <Characters.TableBodyTr key={row.id}>
                  <Characters.TableBodyTd>{index + 1}</Characters.TableBodyTd>
                  <Characters.TableBodyTd>
                    {row.profile_path && row.profile_path !== '' ? (
                      <Characters.TableBodyTdImage alt="" src={urlImg} />
                    ) : (
                      <Characters.TableBodyTdBackdrop />
                    )}
                  </Characters.TableBodyTd>
                  <Characters.TableBodyTd>{row.character}</Characters.TableBodyTd>
                  <Characters.TableBodyTd>{row.name}</Characters.TableBodyTd>
                </Characters.TableBodyTr>
              )
            })}
          </Characters.TableBody>
        </Characters.Table>
      )}
      {loading && (
        <Characters.Loading>
          <Characters.LoadingImage alt="" src={animation} />
        </Characters.Loading>
      )}
    </Characters>
  )
}

export default CharactersComponent
