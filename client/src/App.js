import React from 'react';
import Button from './components/Button'
import styled from 'styled-components'
const Buttonstyled = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
// import Navbar from './components/Navbar';

/* <Router>
<>
  <Navbar />
  <Switch>
    <Route exact path='/' component={SearchBooks} />
    <Route exact path='/saved' component={SavedBooks} />
    <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
  </Switch>
</>
</Router> */


function App() {
  return (
    <Buttonstyled>CSS-IN-JS</Buttonstyled>
  );
}

export default App;
