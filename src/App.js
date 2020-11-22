import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import Header from './components/Header';
import Overview from './pages/Overview';
import theme from './muiTheme';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <HashRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Overview} />
          </Switch>
        </HashRouter>
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
