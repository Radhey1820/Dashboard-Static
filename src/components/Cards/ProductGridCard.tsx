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
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import ProductTable from '../Tables/ProductTable';

const bull = (
  <Box
    component='span'
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function ProducGridContainer() {
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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: '65%' }}>
              <Typography variant='h5' component='div'>
                Product Sell
              </Typography>
            </div>
            <div>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder='Search…'
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </div>
            <div>
              <FormControl style={{ width: '140px' }}>
                <InputLabel id='demo-simple-select-label'>
                  Last 30 days
                </InputLabel>
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
          <ProductTable />
        </div>
      </CardContent>
    </Card>
  );
}
