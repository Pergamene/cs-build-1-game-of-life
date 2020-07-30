import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cell from './Cell';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '625px',
    width: '625px',
    border: '1px solid #eee',
  },
});

const Grid = props => {
  const { lifeData, toggleCell } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {lifeData.map((isAlive, cellId) => {
        return <Cell isAlive={isAlive} cellId={cellId} toggleCell={toggleCell} key={cellId} />;
      })}
    </div>
  );
};

export default Grid;
