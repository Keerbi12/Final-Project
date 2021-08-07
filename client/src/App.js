import React from 'react';
import styled from 'styled-components'
import { Buttonstyled } from './components/Buttonstyled.style'
import { Cucumber } from './components/Buttonstyled.style'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';
// import Navbar from './components/Navbar';

const Tomatobtn = styled(Buttonstyled)`
  background-color: tomato;
  color: white;
  margin: 50px;
`;

function App() {
  return (
    <div>
      <Buttonstyled>Styled Component</Buttonstyled>
      <Buttonstyled>Styled Component</Buttonstyled>
      <Buttonstyled>Styled Component</Buttonstyled>
      <Tomatobtn>Styled Tomato</Tomatobtn>
      <Cucumber>Styled Cucumber</Cucumber>
    </div>
  );
}

export default App;
