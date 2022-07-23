/* eslint-disable react/no-array-index-key */
import {
  Button,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import Characters from '../characters';
import Entries from '../entries';

function TheGame() {
  const [currentCharacter, setCurrentCharacter] = useState(Characters.Grunewald);
  const [currentDate, setCurrentDate] = useState(`${new Date(1931, 9, 1).toDateString()}`);
  const [locationsVisited, setLocationsVisited] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(Entries[13](currentCharacter, currentDate, locationsVisited))
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => { setDataIsLoaded(true) }, []);

  const handleClick = (event) => {
    event.preventDefault();

    setLocationsVisited(current => [...current, currentLocation.goTo[event.target.id].location]);

    setCurrentLocation(Entries[currentLocation.goTo[event.target.id].location](currentCharacter, currentDate, locationsVisited));
  }

  if (!dataIsLoaded) {
    return (
      <Container className="App" />
    );
  }

  return (
    <Container className="App">
      <Typography variant="h3" component="h3" gutterBottom>
        {currentCharacter.name || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        HP: {currentCharacter.stats.hitPoints || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        MP: {currentCharacter.stats.magicPoints || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        Sanity: {currentCharacter.stats.sanityPoints || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        Locations Visited: {locationsVisited || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        Current Date: {currentDate || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        {currentLocation.paragraph}
      </Typography>
      {currentLocation.goTo.map((option, index) => (
        <Button id={index} onClick={handleClick}>
          {option.text}
        </Button>
      ))}
    </Container>
  );
}

export default TheGame;
