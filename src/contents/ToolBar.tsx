// import React from 'react';
// import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Link } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
import { Link as RouterLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';
import SportsMmaIcon from '@mui/icons-material/SportsMma';

// const StyledFab = styled(Fab)({
//   position: 'absolute',
//   zIndex: 1,
//   top: -30,
//   left: 0,
//   right: 0,
//   margin: '0 auto',
// });

function ToolBar() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Link component={RouterLink} to="/" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
        </Link>
        <Link component={RouterLink} to="/practice" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <SportsEsportsIcon />
          </IconButton>
        </Link>
        
        <Link component={RouterLink} to="/game" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <SportsMmaIcon />
          </IconButton>
        </Link>
        <Link component={RouterLink} to="/about" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <InfoIcon />
          </IconButton>
        </Link>
        {/* <StyledFab> */}
          {/* <AddIcon /> */}
        {/* </StyledFab> */}
        <Box sx={{ flexGrow:1 }} />
        {/* <IconButton color="inherit"> */}
          {/* <SearchIcon /> */}
        {/* </IconButton> */}
        {/* <IconButton color="inherit"> */}
          {/* <MoreIcon /> */}
        {/* </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}

export default ToolBar;