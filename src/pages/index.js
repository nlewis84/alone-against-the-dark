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
  const [currentDate, setCurrentDate] = useState(`${new Date(1931, 9, 10).toDateString()}`);
  const [locationsVisited, setLocationsVisited] = useState([]);
  const [currentLocationTable, setCurrentLocationTable] = useState([])
  const [currentLocation, setCurrentLocation] = useState(Entries[13](currentCharacter, currentDate, currentLocationTable, locationsVisited))
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => { setDataIsLoaded(true) }, []);

  const handleClick = (event) => {
    event.preventDefault();

    if (currentLocation.type === 'LocationTable') {
      setCurrentLocationTable(currentLocation.locationTableName);
      setLocationsVisited(current => [...current, currentLocation.locations[event.target.id].goTo[0].location])
      setCurrentLocation(Entries[currentLocation.locations[event.target.id].goTo[0].location](currentCharacter, currentDate, currentLocationTable, locationsVisited))
    } else {
      setLocationsVisited(current => [...current, currentLocation.goTo[event.target.id].location])
      setCurrentLocation(Entries[currentLocation.goTo[event.target.id].location](currentCharacter, currentDate, currentLocationTable, locationsVisited));
    }
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
        Locations Visited: {locationsVisited.map((loc) => `${loc} `) || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        Locations Table: {currentLocationTable || ''}
      </Typography>
      <Typography component="p" gutterBottom>
        Current Date: {currentDate || ''}
      </Typography>
      {currentLocation.type === "LocationTable"
        ? null
        : (
          <Typography component="p" gutterBottom>
            {currentLocation.paragraph}
          </Typography>
        )
      }
      {
        currentLocation.type === "LocationTable"
          ? (
            <Grid container spacing={3}>
              {currentLocation.locations.map((item, indexOfLocation) => (
                <Grid item xs={12} sm={6} md={4} key={indexOfLocation}>
                  {item.goTo.map((itemTwo, iTwo) => (
                    <Button key={iTwo} variant="contained" color="primary" onClick={handleClick} id={indexOfLocation} >
                      {itemTwo.text}
                    </Button>
                  ))}
                </Grid>
              ))}
            </Grid>
          )
          : (
            currentLocation.goTo.map((option, index) => (
              <Button key={index} variant="contained" id={index} onClick={handleClick}>
                {option.text}
              </Button>
            )
            ))
      }
    </Container >
  );
}

export default TheGame;
