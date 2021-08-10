import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components'
import { Buttonstyled } from './components/Buttonstyled.style'
import { Cucumber } from './components/Buttonstyled.style'
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import Form from './components/Form'

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          {/*<Route exact path='/' component={SearchBooks} />*/}
          <Route exact path='/' />
          <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

//   const Tomatobtn = styled(Buttonstyled)`
//   background-color: tomato;
//   color: white;
//   margin: 50px;
// `;

/* <div className='App'>
<Navbar bg='dark' variant='dark' expand='lg'  >
  Hello there
</Navbar>
</div>
<Buttonstyled>Styled Component</Buttonstyled>
<Buttonstyled>Styled Component</Buttonstyled>
<Buttonstyled>Styled Component</Buttonstyled>
<Tomatobtn>Styled Tomato</Tomatobtn>
<Cucumber>Styled Cucumber</Cucumber> */

// function App() {
//   return (
//     <Router>
//       <>
//         <Navbar />
//         <Form />
//         <Switch>
//           <Route exact path='/' component={SearchBooks} />
//           <Route render={() => <h1 className='display-2'>Wrong Page!</h1>} />
//         </Switch>
//       </>
//     </Router>
//   );
// }

export default App;
