import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import SavedMemories from './pages/SavedMemories';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {/*<Route exact path='/' component={SearchBooks} />*/}
          <Route exact path='/' component={Home}/>
          <Route exact path='/saved' component={SavedMemories} />
          <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
