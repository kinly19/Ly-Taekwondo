import React from 'react';
import Navbar from './components/Navbar'

import Home from './pages/Home'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import AboutMe from './pages/AboutMe';
import WhatIsTaekwondo from './pages/WhatIsTaekwondo/WhatIsTaekwondo';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/AboutMe' component={AboutMe} />
          <Route exact path='/WhatIsTaekwondo' component={WhatIsTaekwondo} />
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App;
