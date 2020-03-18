import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/InfoOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between'
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant='h3' color={'textPrimary'}>
        Tracket
      </Typography>
      <div>
        <Tooltip title='Made by Seve and Wenzel'>
          <IconButton aria-label='delete'>
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;
