import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import StartPage from './StartPage';
import SetupPage from './SetupPage';

const Navigator = ({ setSongs, setBracket, hasSongs }) => {
  return (
    <BrowserRouter>
      <Route path='/' exact>
        <StartPage setSongs={setSongs} />
      </Route>
      <Route path='/setup' exact>
        {hasSongs ? <SetupPage setBracket={setBracket} /> : <Redirect to='/' />}
      </Route>
    </BrowserRouter>
  );
};

export default Navigator;
