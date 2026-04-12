import MuiCoinCard from './components/MuiCoinCard';

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565c0',    
    },
    secondary: {
      main: '#dc004e',    
    },
    success: {
      main: '#2e7d32',    
    },
    error: {
      main: '#d32f2f',    // red — loss
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h6: {
      fontWeight: 700,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,      // less rounded corners
          textTransform: 'none' // removes UPPERCASE text
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,

          border: '1px solid #e0e0e0'
        }
      }
    }
  }
});


const mockCoin = {
  name: 'Bitcoin',
  symbol: 'btc',
  image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
  current_price: 5000000,
  market_cap: 10000000000,
  price_change_percentage_24h: -2.5,
};
function App(){
  return(
    <ThemeProvider theme={theme}>

    <div style={{ padding: '2rem' }}>
<MuiCoinCard coin={mockCoin} />
</div>
</ThemeProvider>)
}
export default App;