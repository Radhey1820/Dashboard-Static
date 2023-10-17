import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { PieChart } from '../Charts/PieChart';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function PieChartContainer() {
  const [age, setAge] = React.useState('');

  //   const handleChange = (event: SelectChangeEvent) => {
  //     setAge(event.target.value as string);
  //   };
  return (
    <Card
      sx={{
        minWidth: 200,
        borderRadius: '6px',
        marginRight: '6%',
        height: '100%',
        width: '100%',
      }}
    >
      <CardContent>
        <div>
          <div>
            <Typography variant='h5' component='div'>
              Customers
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Customers that buy products
            </Typography>
          </div>
        </div>
        <PieChart />
      </CardContent>
    </Card>
  );
}
