import React, { useState } from 'react';
import useInterval from 'react-useinterval';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SkipNextIcon from '@material-ui/icons/SkipNext';
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
  select: {
    width: '75px',
    margin: '0 5px',
  },
  slider: {
    width: '100px',
    margin: '5px',
    color: 'black',
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
  const [color, setColor] = useState('black');
  const [open, setOpen] = useState(false);
  const [speed, setSpeed] = useState(1000);
  
  const toggleCell = cellId => {
    if (!hasStarted) {
      const newLifeData = lifeData.slice();
      newLifeData[cellId] = !newLifeData[cellId];
      setLifeData(newLifeData);
    }
  };

  const handleSelect = event => {
    setColor(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSlide = (event, newSpeed) => {
    setSpeed(newSpeed);
  };
  
  const handlePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };
  
  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleNext = () => {
    nextGen();
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

  useInterval(nextGen, isPlaying ? speed : null);
  
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {lifeData.map((isAlive, cellId) => {
          return <Cell isAlive={isAlive} cellId={cellId} toggleCell={toggleCell} color={color} key={cellId} />;
        })}
      </div>
      <div className={classes.interface}>
        <h2 className={classes.counter}>Generation: {generation}</h2>
        <div className={classes.buttons}>
          <Select className={classes.select} value={color} open={open} onClose={handleClose} onOpen={handleOpen} onChange={handleSelect}>
            <MenuItem value="black">Black</MenuItem>
            <MenuItem value="red">Red</MenuItem>
            <MenuItem value="green">Green</MenuItem>
            <MenuItem value="blue">Blue</MenuItem>
          </Select>
          <Slider className={classes.slider} value={speed} min={500} max={5000} scale={(x) => x ** 10} onChange={handleSlide} />
          {isPlaying ? (
            <PauseIcon fontSize="large" onClick={handlePause} />
          ) : (
            <PlayArrowIcon fontSize="large" onClick={handlePlay} />
          )}
          <SkipNextIcon fontSize="large" onClick={handleNext} />
          <ClearIcon fontSize="large" onClick={handleClear} />
        </div>
      </div>
    </div>
  );
};

export default Board;
