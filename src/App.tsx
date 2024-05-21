import { Box, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import AutoTopup from "./Components/AutoTopup"


// Creating Theme for Material UI or changing the default breakpoints
const theme = createTheme({
  typography: {
    fontFamily: [
      'poppins',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  },
  breakpoints:{
    values:{
      xs: 0,
      sm: 800,
      md: 990,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    // TheemeProvider Material UI
    <ThemeProvider theme={theme}>
      <Box 
        sx={{margin:"auto",width:{sm:"90vw",md:"990px"}}}
      >
        {/* AutoTopUp Component */}
        <AutoTopup />           
      </Box>
    </ThemeProvider>
  );
}

export default App;
