import React from 'react'
import {  CssBaseline } from '@mui/material'
import { Route , Switch } from 'react-router-dom'
import { Actors , Movies , MovieInfo , Profile , Navbar} from './index'
import { useStyles } from './styles'


const App = () => {

  const cla = useStyles();



  return (
    <div className={ cla.root} >

      <CssBaseline />
      <Navbar/>


    <main className={cla.content}>
      <div className={cla.toolbar}/>
      <Switch>

        <Route exact path="/">
          <Movies/>   
        </Route>

        <Route exact path="/movie/:id">
        <MovieInfo/>   
 
        </Route>

        <Route exact path="/actors/:id">
          <Actors/> 
        </Route>

        <Route exact path="/profile/:id">
          <Profile/>

        </Route>

      

      </Switch>
    </main>
     


    </div>
  )
}

export default App