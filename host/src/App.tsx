import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/app/Home'
import Navbar from './components/app/Navbar'
import { AppProvider } from './contexts/AppContext'
import GlobalStyles from './styles/GlobalStyles'

const app = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

const App = () => (
  <AppProvider>
    <Navbar />
    <Home />
    <GlobalStyles />
  </AppProvider>
)

app.render(<App />)
