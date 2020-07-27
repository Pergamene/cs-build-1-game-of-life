import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Board from './Board';
import Description from './Description';

const useStyles = makeStyles({
  root: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    margin: '18px auto',
  },
  content: {
    display: 'flex',
  },
  board: {
    marginRight: '20px',
  },
  side: {
    display: 'flex',
    flexDirection: 'column',
  }
});

const Game = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Conway's Game of Life</h1>
      <div className={classes.content}>
        <div className={classes.board}>
          <Board />
        </div>
        <div className={classes.side}>
          <Description />
        </div>
      </div>
    </div>
  );
};

export default Game;
