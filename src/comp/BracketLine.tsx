import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: 30,
    borderTop: '1px solid white'
  }
});

interface Props {
  gridLocation: string;
  down?: Boolean;
  up?: Boolean;
}

const downStyle = {
  marginTop: 0,
  marginBottom: 30,
  borderRight: '1px solid white'
};

const upStyle = {
  marginTop: 30,
  marginBottom: 0,
  borderTop: 'none',
  borderBottom: '1px solid white',
  borderRight: '1px solid white'
};

const BracketLine = ({ gridLocation, down, up }: Props) => {
  const classes = useStyles();

  return (
    <div
      className={classes.root}
      style={{
        gridArea: gridLocation,
        ...(down ? downStyle : {}),
        ...(up ? upStyle : {})
      }}
    ></div>
  );
};

export default BracketLine;
