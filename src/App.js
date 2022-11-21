import React from 'react';
import GlobalStyle from "./styles/global";
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './router/Router';

const App = () => {
  return (
    <Router>
      <GlobalStyle/>
      <Routes/>
    </Router>
  );
}

export default App;
