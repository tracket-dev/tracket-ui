import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
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
  }
});

interface Props {
  setSongs: Function;
}

const placeholder: string = `Backseat Freestyle\nThe Art of Peer Pressure\nMoney Trees\nPoetic Justice\nGood Kid\nM.A.A.D City\nSing About Me, I'm Dying of Thirst\nSwimming Pools`;

const validator = (text: string) =>
  text.split('\n').length === 8 || text.length === 0;

const StartPage = (props: Props) => {
  const [songField, setSongField] = useState('');
  const classes = useStyles();
  const { setSongs } = props;

  const isValid = useMemo(() => validator(songField), [songField]);
  return (
    <div className={classes.container}>
      <Typography
        style={{ marginBottom: 30, fontWeight: 200 }}
        variant={'h4'}
        color='textPrimary'
      >
        Make tournament brackets for songs.
      </Typography>
      <TextField
        value={songField}
        onChange={e => setSongField(e.target.value)}
        style={{ width: '50%', minWidth: 300 }}
        id='song-text-field'
        label='Songs, separated by line, total 8 songs'
        placeholder={placeholder}
        multiline={true}
        rows={8}
        variant='outlined'
        helperText={!isValid ? 'You need a total of 8 songs.' : ' '}
        error={!isValid}
      />
      <Tooltip title='Continue'>
        <Link
          to='/setup'
          onClick={() => setSongs(songField.split('\n'))}
          style={{
            pointerEvents: !!!songField.length || !isValid ? 'none' : 'auto'
          }}
        >
          <IconButton
            style={{ marginTop: 30 }}
            disabled={!!!songField.length || !isValid}
          >
            <PlayIcon />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  );
};

export default StartPage;
