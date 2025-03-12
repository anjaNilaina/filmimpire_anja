import React from 'react'
import { AppBar, Toolbar, IconButton, Button , Drawer , Avatar,useMediaQuery} from '@mui/material'
import { Link } from 'react-router-dom'
import { AccountCircle, Menu , Brightness4, Brightness7 } from '@mui/icons-material'

import { useStyles } from './styles'
import { useTheme } from '@mui/material/styles'



const Navbar = () => {

  const classes = useStyles();
  const isMobile = useMediaQuery('(max-width:600px)')
  const theme = useTheme();

  return (

    <>
      <AppBar position="fixed">

        <Toolbar className={classes.toolbar}>
          
          { isMobile && ( 

              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                oncClick = {() => { }}
                className={classes.menuButton}
              >

                <Menu/>
              </IconButton>

          ) }

          <IconButton color="inherit"  > 
            {theme.palette.mode === 'dark' ? <Brightness4/> : <Brightness7/>}
          </IconButton>
         

       
         </Toolbar> 


      </AppBar>
    
    </>


  )
}

export default Navbar