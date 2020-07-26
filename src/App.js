import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        < Navbar />

        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App;
