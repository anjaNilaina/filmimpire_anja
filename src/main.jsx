import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createTheme , ThemeProvider } from '@mui/material/styles'

const theme = createTheme({})

createRoot(document.getElementById('root')).render(
    <ThemeProvider theme = {theme}>

    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ThemeProvider>

)
