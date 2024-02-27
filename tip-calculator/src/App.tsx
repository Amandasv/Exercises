import React, { useState } from 'react';
import './App.css';
import {FormControl, InputLabel, Input, InputAdornment, Card, CardContent, CardActions, Grid} from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';


export default function App() {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * tipPercentage) / 100;
  const perPersonTip = totalTip/people ;

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
        <Card sx={{ maxWidth: 300, flexGrow: 1,  }} >
        <CardContent>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="bill">Total Bill</InputLabel>
            <Input
              id="bill"
              value={isNaN(bill)? 0 : bill}
              onChange={event => {setBill(parseInt(event.target.value))}}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
            />
          </FormControl>

          <FormControl  sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="tipPercentage">Tip Percentage</InputLabel>
            <Input
              id="tipPercentage"
              value={isNaN(tipPercentage)? 0 : tipPercentage}
              onChange={event => {setTipPercentage(parseInt(event.target.value))}}
              startAdornment={<InputAdornment position="start">%</InputAdornment>}
            />
          </FormControl>
          <FormControl  sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="people">
            Number of People
            </InputLabel>
            <Input
              id="people"
              value={isNaN(people)? 0 : people}
              onChange={event => {setPeople(parseInt(event.target.value))}}
              startAdornment={
                <InputAdornment position="start">
                  <PeopleIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <p>Total Tip: {isNaN(totalTip)? '-' : `$${totalTip.toFixed(2)}`}</p>
          <p>Tip Per Person: {isNaN(perPersonTip) ? '-' : `$${perPersonTip.toFixed(2)}`}</p>
        </CardActions>
      </Card>
        </Grid>
      </Grid>

    </>
    
  );
}
