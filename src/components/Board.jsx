import React, { useState, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Row from './Row';

const useStyles = makeStyles({
  grid: {
    display: 'flex',
    flexDirection: 'column',
    height: '500px',
    width: '500px',
    border: '1px solid #eee',
  },
});

const Board = props => {
  const { size } = props;
  const classes = useStyles();
  const [generation, setGeneration] = useState(0);
  const [displayBuffer, setDisplayBuffer] = useState(new Array(size).fill(Array(size).fill(false)));
  const [workBuffer, setWorkBuffer] = useState(new Array(size).fill(Array(size).fill(false)));

  const toggleCell = (row, column) => {
    const newDisplayBuffer = displayBuffer.map(row => {
      return row.slice();
    });
    newDisplayBuffer[row][column] = !newDisplayBuffer[row][column];
    setDisplayBuffer(newDisplayBuffer);
  };

  return (
    <Fragment>
      <div>Generation: {generation}</div>
      <div className={classes.grid}>
        {displayBuffer.map((cells, row) => {
          return <Row cells={cells} row={row} toggleCell={toggleCell} key={row} />;
        })}
      </div>
    </Fragment>
  );
};

export default Board;
