import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.isAlive ? '#000' : '#fff',
    display: 'flex',
    flex: '1',
    border: '1px solid #eee',
  },
});

const Cell = props => {
  const { isAlive, row, column, toggleCell } = props;
  const classes = useStyles({ isAlive });

  const toggleIsAlive = () => {
    toggleCell(row, column);
  };

  return (
    <div className={classes.root} onClick={toggleIsAlive}>
      {isAlive}
    </div>
  );
};

export default Cell;
