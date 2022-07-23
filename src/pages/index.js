/**
 * /* eslint-disable react/no-array-index-key
 *
 * @format
 */

import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Characters from '../characters';
import Entries from '../entries';

function TheGame() {
  const [currentCharacter] = useState(Characters.Grunewald);
  const [currentDate, setCurrentDate] = useState(`${new Date(1931, 8, 2).toDateString()}`);
  const [currentHour, setCurrentHour] = useState(6);
  const [locationsVisited, setLocationsVisited] = useState([]);
  const [currentLocationTable, setCurrentLocationTable] = useState('Arkham');
  const [currentLocation, setCurrentLocation] = useState(
    Entries[13](currentCharacter, currentDate, currentLocationTable, locationsVisited)
  );
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  useEffect(() => {
    setDataIsLoaded(true);
  }, []);

  const advanceDays = (days) => {
    const date = new Date(currentDate);
    const newDate = date.setDate(date.getDate() + days);
    const newDateString = `${new Date(newDate).toDateString()}`;

    setCurrentDate(newDateString);
    setCurrentHour(6);
  };

  const advanceHours = (hours) => {
    if (typeof hours === 'number') {
      const newHour = currentHour + hours;

      if (newHour > 23) {
        advanceDays(1);
        setCurrentHour(newHour - 24);
      } else {
        setCurrentHour(newHour);
      }
    } else {
      console.log(currentHour);
      if (currentHour >= 22) {
        advanceHours(1);
      } else {
        setCurrentHour(23);
      }
    }
  };

  const handleClick = (event) => {
    event.preventDefault();

    if (currentLocation.type === 'LocationTable') {
      let goTo = currentLocation.locations[event.target.id].goTo[0];

      if (goTo.advance.type === 'Hour') {
        advanceHours(goTo.advance.amount);
      } else if (goTo.advance.type === 'Day') {
        advanceDays(goTo.advance.amount);
      }

      setCurrentLocationTable(currentLocation.locationTableName);
      setLocationsVisited((current) => [...current, goTo.location]);
      setCurrentLocation(
        Entries[goTo.location](
          currentCharacter,
          currentDate,
          currentLocationTable,
          locationsVisited
        )
      );
    } else {
      let goTo = currentLocation.goTo[event.target.id];

      if (goTo.advance.type === 'Hour') {
        advanceHours(goTo.advance.amount);
      } else if (goTo.advance.type === 'Day') {
        advanceDays(goTo.advance.amount);
      }

      setLocationsVisited((current) => [...current, goTo.location]);
      setCurrentLocation(
        Entries[goTo.location](
          currentCharacter,
          currentDate,
          currentLocationTable,
          locationsVisited
        )
      );
    }
  };

  if (!dataIsLoaded) {
    return <Container className="App" />;
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
      <Typography component="p" gutterBottom>
        Current Hour: {currentHour === 0 ? 'Midnight' : currentHour || ''}
      </Typography>
      {currentLocation.type === 'LocationTable' ? null : (
        <>
          <Typography variant="h3" component="h3" gutterBottom>
            {'Current Location'}
          </Typography>
          <Typography component="p" gutterBottom>
            {currentLocation.paragraph}
          </Typography>
        </>
      )}
      {currentLocation.type === 'LocationTable' ? (
        <>
          <Typography variant="h3" component="h3" gutterBottom>
            {currentLocation.locationTableName + ' Locations'}
          </Typography>
          <Grid container spacing={3}>
            {currentLocation.locations.map((item, indexOfLocation) => (
              <Grid item xs={12} sm={6} md={4} key={indexOfLocation}>
                {item.goTo.map((itemTwo, iTwo) => (
                  <Button
                    key={iTwo}
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                    id={indexOfLocation}>
                    {itemTwo.text}
                  </Button>
                ))}
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={3}>
            {currentLocation.goTo.map((option, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Button key={index} variant="contained" id={index} onClick={handleClick}>
                  {option.text}
                </Button>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
}

export default TheGame;
