import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Home from './pages/Home'
import SavedMemories from './pages/SavedMemories';
// import SavedMemories2 from './pages/SavedMemories2';
import Navbar from './components/Navbar';

function App() {
  // const [posts, setPostData] = useState([]);
  // useEffect(() => {
  //     axios
  //         .get('http:localhost:3001/api/memories/get')
  //         .then(res => setPostData(res.data))
  //         .catch(error => console.log(error));
  // });
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/saved' component={SavedMemories}/>
          {/* <Route exact path='/saved' render={()=> <SavedMemories2 posts={posts}/>} /> */}
          <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
