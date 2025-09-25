// import React from 'react';
// import { styled } from '@mui/material/styles';
import { AppBar, Box, Toolbar, IconButton, Link } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AddIcon from '@mui/icons-material/Add';
// import SearchIcon from '@mui/icons-material/Search';
// import MoreIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import InfoIcon from '@mui/icons-material/Info';

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
        <Link href="/" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
        </Link>
        <Link href="/practice" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit" aria-label="open drawer">
            <SportsEsportsIcon />
          </IconButton>
        </Link>
        <Link href="/about" color="inherit" underline="none" sx={{ display: 'flex', alignItems: 'center' }}>
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