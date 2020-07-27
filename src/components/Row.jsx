import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cell from './Cell';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flex: '1',
  },
});

const Row = props => {
  const { cells, row, toggleCell } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {cells.map((isAlive, column) => {
        return <Cell isAlive={isAlive} row={row} column={column} toggleCell={toggleCell} key={`${row}, ${column}`} />;
      })}
    </div>
  );
};

export default Row;
