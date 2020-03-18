import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BracketNode from './BracketNode';
import BracketLine from './BracketLine';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    minHeight: 600,
    borderRadius: 5,
    padding: 10,
    marginTop: 30
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

const BRACKET_LOCATIONS: { [key: string]: string } = {
  // col 1
  LOC_ONE: '1 / 1 / 2 / 2',
  LOC_TWO: '3 / 1 / 4 / 2',
  LOC_THREE: '7 / 1 / 8 / 2',
  LOC_FOUR: '9 / 1 / 10 / 2',

  // col 2
  LOC_FIVE: '1 / 3 / 2 / 4',
  LOC_SIX: '3 / 3 / 4 / 4',
  LOC_SEVEN: '7 / 3 / 8 / 4',
  LOC_EIGHT: '9 / 3 / 10 / 4',

  // col 3
  LOC_NINE: '4 / 5 / 5 / 6',
  LOC_TEN: '6 / 5 / 7 / 6',

  // col 4
  LOC_ELEVEN: '5 / 7 / 6 / 8'
};

const BracketView = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={classes.container}
      style={{ backgroundColor: theme.palette.background.default }}
    >
      <div className={classes.bracketContainer}>
        {Object.keys(BRACKET_LOCATIONS).map(
          (key: string, index: string | number) => (
            <BracketNode
              gridLocation={BRACKET_LOCATIONS[key]}
              top={index}
              bottom={index}
            />
          )
        )}
        <BracketLine gridLocation={'1 / 2 / 2 / 3'} />
        <BracketLine gridLocation={'3 / 2 / 4 / 3'} />
        <BracketLine gridLocation={'7 / 2 / 8 / 3'} />
        <BracketLine gridLocation={'9 / 2 / 10 / 3'} />
        <BracketLine gridLocation={'2 / 4 / 4 / 5'} down />
        <BracketLine gridLocation={'4 / 4 / 5 / 5'} down />
        <BracketLine gridLocation={'6 / 4 / 7 / 5'} up />
        <BracketLine gridLocation={'7 / 4 / 9 / 5'} up />
        <BracketLine gridLocation={'5 / 6 / 6 / 7'} down />
        <BracketLine gridLocation={'5 / 6 / 6 / 7'} up />
      </div>
    </div>
  );
};

export default BracketView;
