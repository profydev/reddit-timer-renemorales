import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/how-it-works">How it works</Route>
          <Route path="/about">About</Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
