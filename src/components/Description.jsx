import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    margin: '0',
    fontSize: '20px',
  },
  p: {
    lineHeight: '22px',
    margin: '0 0 8px',
  },
  list: {
    margin: '0',
    lineHeight: '24px',
  },
  item: {
    marginBottom: '8px',
  },
});

const Description = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h3 className={classes.header}>Description</h3>
      <p className={classes.p}>Created by mathematcian John Conway in 1970.  The Game of Life is a zero-player game and cellular automaton, where the player sets the inital state and then allows the game to run itself.  It is Turing Complete, meaning it can be used to similate a computer system.</p>
      <p className={classes.p}>Many different patterns occur, which are classified by their behavior:</p>
      <ul className={classes.list}>
        <li className={classes.item}><b>Still Lifes:</b> Do not change from one generation to the next.</li>
        <li className={classes.item}><b>Oscillators:</b> Return to their initial state after a finite number of generations.</li>
        <li className={classes.item}><b>Spaceships:</b> Translates across the grid.</li>
      </ul>
      <p className={classes.p}>Many configurations eventually become a combination of these patterns.</p>
      <h3 className={classes.header}>Rules</h3>
      <ol className={classes.list}>
        <li className={classes.item}>Any live cell with fewer than two live neighbors dies, as if by underpopulation.</li>
        <li className={classes.item}>Any live cell with two or three live neighbors lives on to the next generation.</li>
        <li className={classes.item}>Any live cell with more than three live neighbors dies, as if by over population.</li>
        <li className={classes.item}>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>
      </ol>
    </div>
  );
};

export default Description;
