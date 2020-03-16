import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from './comp/Header';
import BracketView from './comp/BracketView';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
        <Header />
        <BracketView />
      </div>
    </ThemeProvider>
  );
};

export default App;
