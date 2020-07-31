import React, { useState } from 'react';
import useInterval from 'react-useinterval';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ClearIcon from '@material-ui/icons/Clear';

import GenerationsUtils from '../utils/Generations';

import Cell from './Cell';

const useStyles = makeStyles({
  root: {
    width: '625px',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '625px',
    width: '625px',
    border: '1px solid #eee',
  },
  interface: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  counter: {
    fontSize: '26px',
    margin: '2px 5px',
  },
  buttons: {
    display: 'flex',
  },
});

const Board = () => {
  const classes = useStyles();
  const [hasStarted, setHasStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [generation, setGeneration] = useState(0);
  const [lifeData, setLifeData] = useState(new Array(625).fill(false));
  
  const toggleCell = cellId => {
    if (!hasStarted) {
      const newLifeData = lifeData.slice();
      newLifeData[cellId] = !newLifeData[cellId];
      setLifeData(newLifeData);
    }
  };
  
  const handlePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };
  
  const handlePause = () => {
    setIsPlaying(false);
  };
  
  const handleClear = () => {
    setLifeData(new Array(625).fill(false));
    setHasStarted(false);
    setIsPlaying(false);
    setGeneration(0);
  };

  const nextGen = () => {
    const nextGen = GenerationsUtils.nextGeneration(lifeData);
    setLifeData(nextGen);
    setGeneration(generation + 1);
  };

  useInterval(nextGen, isPlaying ? 500 : null);
  
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {lifeData.map((isAlive, cellId) => {
          return <Cell isAlive={isAlive} cellId={cellId} toggleCell={toggleCell} key={cellId} />;
        })}
      </div>
      <div className={classes.interface}>
        <h2 className={classes.counter}>Generation: {generation}</h2>
        <div className={classes.buttons}>
          {isPlaying ? (
            <PauseIcon fontSize="large" onClick={handlePause} />
          ) : (
            <PlayArrowIcon fontSize="large" onClick={handlePlay} />
          )}
          <ClearIcon fontSize="large" onClick={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default Board;
