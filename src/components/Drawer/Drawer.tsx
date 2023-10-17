'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Card1 from '../Cards/Card1';
import Card2 from '../Cards/Card2';
import Card3 from '../Cards/Card3';
import Card4 from '../Cards/Card4';
import BarChart from '../Cards/BarChartCardContainer';
import BarChartContainer from '../Cards/BarChartCardContainer';
import PieChartContainer from '../Cards/PieChartCardContainer';
import ProducGridContainer from '../Cards/ProductGridCard';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: '#012e5c', height: '100%', color: '#fff' }}>
      <Toolbar>Dashboard</Toolbar>
      <Divider />
      <List>
        {['Dashboard', 'Product', 'Customer', 'Income', 'Promote', 'Help'].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? (
                    <InboxIcon style={{ color: '#fff' }} />
                  ) : (
                    <MailIcon style={{ color: '#fff' }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: '#fff' }}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: '#000' }}
          >
            <MenuIcon />
          </IconButton>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant='h6'
              noWrap
              component='div'
              style={{ color: '#000', marginRight: '8px' }}
            >
              Hello Shahrukh
            </Typography>
            <WavingHandIcon scale={2} style={{ color: '#E8BEAC' }} />
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
        aria-label='mailbox folders'
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <div>
          <div style={{ display: 'flex', marginTop: '7%' }}>
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
          </div>
          <div style={{ display: 'flex', marginTop: '7%' }}>
            <div style={{ marginRight: '20px', width: '65%' }}>
              <BarChartContainer />
            </div>
            <div style={{ width: '27%' }}>
              <PieChartContainer />
            </div>
          </div>
          <div style={{ display: 'flex', marginTop: '7%' }}>
            <ProducGridContainer />
          </div>
        </div>
      </Box>
    </Box>
  );
}
