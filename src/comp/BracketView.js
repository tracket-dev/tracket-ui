import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { BracketGenerator } from 'react-tournament-bracket';
import { useSearch } from 'react-spotify-api';
import BracketNode from './BracketNode';
import BracketLine from './BracketLine';
import Navigator from './Navigator';

import bracketJson from './test_data/bracket.json';
import { dataToReactBracket, sampleResponse } from './test_data/game';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column',
    width: '100%',
    minHeight: 600,
    borderRadius: 5,
    padding: 10,
    marginTop: 30,

    alignItems: 'center'
  },
  bracketContainer: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(9, 1fr)',
    gridTemplateRows: 'repeat(9, 1fr)',
    gridColumnGap: 0,
    gridRowGap: 0
  }
});

// const getToken = () => {
//   fetch('https://accounts.spotify.com/api/token', );
// }

const encode = text => text.replace(/\s/g, '+');

const runEventHandlers = () => {
  window.$('.g_team').each(function() {
    const songName = window
      .$(this)
      .find('h3')
      .text();

    const songArray = songName.split(' ');
    songArray.shift();

    window
      .$(this)
      .click(() =>
        window.open(`spotify:search:${encode(songArray.join(' '))}`, '_blank')
      );
  });
};

const BracketView = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [songs, setSongs] = useState([]);
  const [bracket, setBracket] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(() => {
    window.$('.gracket').gracket({
      src: bracket
    });

    runEventHandlers();

    setLoaded(true);
  }, [bracket]);

  const setFinalBracket = useCallback(() => {
    const response = {
      id: '1',
      roundTime: 60,
      active: true,
      songs: songs.map((s, i) => ({ id: i, title: s }))
    };

    setBracket(dataToReactBracket(response));
  }, [songs]);

  const songsToSpotify = useCallback(() => {
    songs.forEach(song => {});
  });

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      {bracket.length ? (
        <div className='gracket' />
      ) : (
        <Navigator
          setSongs={setSongs}
          setBracket={setFinalBracket}
          hasSongs={songs.length > 0}
          setLoaded={setLoaded}
        />
      )}

      {bracket.length > 0 && !loaded && (
        <Button onClick={handleLoad} variant='outlined' style={{ width: 100 }}>
          Load Bracket
        </Button>
      )}
      {bracket.length > 0 && loaded && (
        <Typography variant='h3' color='textPrimary'>
          Click a song to open Spotify!
        </Typography>
      )}
    </div>
  );
};

export default BracketView;
