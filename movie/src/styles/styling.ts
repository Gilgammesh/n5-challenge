interface IStyle {
  colors: {
    title: string
    text: string
  }
  typography: {
    font: string
  }
}

const styling: IStyle = {
  colors: {
    title: '#000',
    text: '#3C3C3B'
  },
  typography: {
    font: 'Arial, Helvetica, sans-serif'
  }
}

export default styling
