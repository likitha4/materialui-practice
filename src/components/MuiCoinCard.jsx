import { Card, CardContent, Typography, Box, Chip, Button } from '@mui/material';

const MuiCoinCard = ({ coin }) => {
  const isPositive = coin.price_change_percentage_24h >= 0;

  return (
    <Card sx={{ 
      width: 300, 
      cursor: 'pointer',
      '&:hover': {
        boxShadow: 6
      }
    }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <img src={coin.image} alt={coin.name} width={32} height={32} />
            <Box>
              <Typography fontWeight={500}>{coin.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {coin.symbol.toUpperCase()}
              </Typography>
            </Box>
          </Box>
          <Chip 
            label={`${isPositive ? '▲' : '▼'} ${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%`}
            color={isPositive ? 'success' : 'error'}
            size="small"
          />
        </Box>
        <Typography variant="h6">
          ₹{coin.current_price.toLocaleString('en-IN')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Mkt Cap: ₹{(coin.market_cap / 1e7).toFixed(2)} Cr
        </Typography>
        <Button variant="contained" color="primary"  sx={{mt:1}}>view details</Button>
      </CardContent>
    </Card>
  );
};

export default MuiCoinCard;