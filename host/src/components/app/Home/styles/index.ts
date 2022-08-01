import styled, { StyledComponentBase } from 'styled-components'
import Title from './Title'
import Lists from './Lists'
import List from './List'
import Characters from './Characters'

interface IHome extends StyledComponentBase<any, {}> {
  Title?: any
  Lists?: any
  List?: any
  Characters?: any
}

const Home: IHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #fafafb;
  width: 100%;
`

Home.Title = Title
Home.Lists = Lists
Home.List = List
Home.Characters = Characters

export default Home
