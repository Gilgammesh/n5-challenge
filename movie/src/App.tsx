import React from 'react'
import ReactDOM from 'react-dom/client'
import Characters from './components/Characters'

const app = ReactDOM.createRoot(document.getElementById('app') as HTMLElement)

const App = () => <Characters lang="es" id={507086} title="Jurassic World Dominion" />

app.render(<App />)
