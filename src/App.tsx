import { Container } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AnyAction } from 'redux';
import './App.css';
import AppLayout from './component/AppLayout';
import { StoreState } from './redux/store';
import { ModelInterface } from './types';
import { todoSlice } from './redux/slice/todoSlice';

function App() {
 
  const {
    actions: { add, remove, update},
  } = todoSlice;
  return (
    <Container>
    <Typography textAlign='center' variant='h3' mt={3} mb={5}>
      ToDo APP
    </Typography>{' '}
    <Grid container spacing={1} justifyContent='center'>
      <AppLayout 
        addHandler={add} 
        removeHandler={remove} updateHandler={update} />
    </Grid>
  </Container>
  );
}

export default App;
