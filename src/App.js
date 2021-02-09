import React from 'react'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import './stylesheets/main.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () =>  {
  return(
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/product" component={Product} />
          </Switch>
        </div>
      </Router>
    )
  }

const styleHome = {
  'paddingTop': '150px',
  'textAlign': 'center'
}

  const Home = () => {
    return(
    <div style={styleHome}>
      <h1>Home Page</h1>
    </div>
    )
  };

export default App;