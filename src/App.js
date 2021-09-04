import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import './sb-admin-2.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardsPage from './components/CardsPage'
import ColorsPage from './components/ColorsPage'
import Borders from './components/Borders'
import ChartsPage from './components/ChartsPage'
function App() {
  return (
    <>
      <div id='wrapper'>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => <Dashboard />} />
            <Route exact path='/cards' render={() => <CardsPage />} />
            <Route path='/colors' render={() => <ColorsPage />} />
            <Route path='/borders' render={() => <Borders />} />
            <Route path='/charts' render={() => <ChartsPage />} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
