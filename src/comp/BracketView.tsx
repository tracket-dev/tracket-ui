import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    width: '100%',
    minHeight: 500,
    borderRadius: 5,
    marginTop: 30
  }
});

const BracketView = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div
      className={classes.container}
      style={{ backgroundColor: theme.palette.background.default }}
    ></div>
  );
};

export default BracketView;
