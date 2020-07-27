import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Board from './Board';

const useStyles = makeStyles({
  root: {

  },
});

const Game = () => {
  const classes = useStyles();
  const [size, setSize] = useState(25);

  return (
    <div>
      <Board size={size} />
    </div>
  );
};

export default Game;
