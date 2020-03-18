import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contender: {
    width: '100%',
    flex: 1,
    padding: 5,
    borderRadius: 5,
    color: '#fff'
  },
  top: {
    backgroundColor: 'red',
    marginBottom: 5
  },
  bottom: {
    backgroundColor: 'blue'
  }
});

interface Props {
  gridLocation: string;
  top: string | number;
  bottom: string | number;
}

const BracketNode = ({ gridLocation, top, bottom }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ gridArea: gridLocation }}>
      <div className={classnames(classes.top, classes.contender)}>{top}</div>
      <div className={classnames(classes.bottom, classes.contender)}>
        {bottom}
      </div>
    </div>
  );
};

export default BracketNode;
