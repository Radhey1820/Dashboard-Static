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
import { BarChart } from '../Charts/BarChart';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BarChartContainer() {
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
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Typography variant='h5' component='div'>
              Overview
            </Typography>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Monthly Earning
            </Typography>
          </div>
          <div>
            <FormControl style={{ width: '112px' }}>
              <InputLabel id='demo-simple-select-label'>Quaterly</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={age}
                label='Age'
                // onChange={handleChange}
              >
                <MenuItem value={10}>1st Quater</MenuItem>
                <MenuItem value={20}>2nd Quater</MenuItem>
                <MenuItem value={30}>3rd Quater</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div>
          <BarChart />
        </div>
      </CardContent>
    </Card>
  );
}
