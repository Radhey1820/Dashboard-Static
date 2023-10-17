import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { deepOrange, green } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CurrencyExchangeSharpIcon from '@mui/icons-material/CurrencyExchangeSharp';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Card2() {
  return (
    <Card
      sx={{
        minWidth: 200,
        borderRadius: '6px',
        marginRight: '6%',
        height: '124px',
        width: '30%',
      }}
    >
      <CardContent>
        <div style={{ display: 'flex' }}>
          <div>
            <Avatar
              sx={{
                bgcolor: green[100],
                borderRadius: '100%',
                width: '92px',
                height: '94px',
              }}
              variant='rounded'
            >
              <CurrencyExchangeSharpIcon
                color='success'
                style={{ fontSize: '3rem' }}
              />
            </Avatar>
          </div>
          <div style={{ marginLeft: '10px' }}>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Earnings
            </Typography>
            <Typography variant='h5' component='div'>
              $198K
            </Typography>
            <Typography
              sx={{ mb: 1.5, fontSize: '8px' }}
              color='text.secondary'
            >
              37.8% this month
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
