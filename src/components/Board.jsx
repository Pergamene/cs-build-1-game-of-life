import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {

  },
});

const Game = () => {
  const classes = useStyles();
  const [generation, setGeneration] = useState(0);

  return (
    <div></div>
  );
};

export default Game;
