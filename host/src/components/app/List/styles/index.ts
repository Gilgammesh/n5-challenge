import styled, { StyledComponentBase } from 'styled-components'
import Title from './Title'
import Item from './Item'
import ItemCount from './ItemCount'
import ItemImage from './ItemImage'
import ItemText from './ItemText'
import Loading from './Loading'
import LoadingImage from './LoadingImage'

interface IList extends StyledComponentBase<any, {}> {
  Title?: any
  Item?: any
  ItemCount?: any
  ItemImage?: any
  ItemText?: any
  Loading?: any
  LoadingImage?: any
}

const List: IList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #fff;
  padding: 5px 0px 8px 0px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08));
  width: 500px;
`

List.Title = Title
List.Item = Item
List.ItemCount = ItemCount
List.ItemImage = ItemImage
List.ItemText = ItemText
List.Loading = Loading
List.LoadingImage = LoadingImage

export default List
