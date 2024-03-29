import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: props => props.isAlive ? props.color : '#fff',
    boxSizing: 'border-box',
    width: '25px',
    height: '25px',
    border: '1px solid #eee',
  },
});

const Cell = props => {
  const { isAlive, cellId, toggleCell, color } = props;
  const classes = useStyles({ isAlive, color });

  const handleClick = () => {
    toggleCell(cellId);
  };

  return (
    <div className={classes.root} onClick={handleClick} />
  );
};

export default Cell;
