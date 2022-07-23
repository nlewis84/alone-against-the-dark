import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import TheGame from './pages';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Nathan Lewis
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container>
      <Box>
        <Typography sx={{ textAlign: 'center' }} variant="h1" component="h1" gutterBottom>
          Alone Against The Dark
        </Typography>
        <TheGame />
        <Copyright />
      </Box>
    </Container>
  );
}