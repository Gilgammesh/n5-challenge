import styled, { StyledComponentBase } from 'styled-components'
import Title from './Title'
import ContainerTable from './ContainerTable'
import Table from './Table'
import TableHead from './TableHead'
import TableHeadTr from './TableHeadTr'
import TableHeadTh from './TableHeadTh'
import TableBody from './TableBody'
import TableBodyTr from './TableBodyTr'
import TableBodyTd from './TableBodyTd'
import TableBodyTdImage from './TableBodyTdImage'
import TableBodyTdBackdrop from './TableBodyTdBackdrop'
import Loading from './Loading'
import LoadingImage from './LoadingImage'

interface ICharacters extends StyledComponentBase<any, {}> {
  Title?: any
  ContainerTable?: any
  Table?: any
  TableHead?: any
  TableHeadTr?: any
  TableHeadTh?: any
  TableBody?: any
  TableBodyTr?: any
  TableBodyTd?: any
  TableBodyTdImage?: any
  TableBodyTdBackdrop?: any
  Loading?: any
  LoadingImage?: any
}

const Characters: ICharacters = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
  gap: 10px;
`

Characters.Title = Title
Characters.ContainerTable = ContainerTable
Characters.Table = Table
Characters.TableHead = TableHead
Characters.TableHeadTr = TableHeadTr
Characters.TableHeadTh = TableHeadTh
Characters.TableBody = TableBody
Characters.TableBodyTr = TableBodyTr
Characters.TableBodyTd = TableBodyTd
Characters.TableBodyTdImage = TableBodyTdImage
Characters.TableBodyTdBackdrop = TableBodyTdBackdrop
Characters.Loading = Loading
Characters.LoadingImage = LoadingImage

export default Characters
