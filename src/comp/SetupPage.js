import React, { useState, useMemo } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tooltip from '@material-ui/core/Tooltip';
import PlayIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: 600,
    borderRadius: 5,
    padding: 10,
    marginTop: 30
  },
  input: {
    width: '30%',
    minWidth: 200
  }
});

const validator = text => text.split('\n').length > 3 || text.length === 0;

const SetupPage = ({ setBracket }) => {
  const [timeLimit, setTimeLimit] = useState(60);
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography
        style={{ marginBottom: 30, fontWeight: 200 }}
        variant={'h6'}
        color='textPrimary'
      >
        Tournament Setup
      </Typography>
      <FormControl className={classes.input}>
        <InputLabel id='select-label'>Voting Round Time</InputLabel>
        <Select
          labelId='select-label'
          id='select'
          value={timeLimit}
          onChange={e => {
            setTimeLimit(e.target.value);
          }}
        >
          <MenuItem value={60}>1 Hour</MenuItem>
          <MenuItem value={720}>12 Hours</MenuItem>
          <MenuItem value={1440}>24 Hours</MenuItem>
        </Select>
      </FormControl>

      <Tooltip title='Continue'>
        <Link to='/'>
          <IconButton style={{ marginTop: 30 }} onClick={setBracket}>
            <PlayIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
};

export default SetupPage;
