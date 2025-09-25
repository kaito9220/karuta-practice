// import React from 'react'
import { Route, Routes } from 'react-router-dom';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Home from './pages/Home';
import Practice from './pages/Practice';
import About from './pages/About';
import NotFound from './pages/NotFound';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import ToolBar from './contents/ToolBar';
import { OriginalTheme } from './styles/OriginalTheme';

function App() {

  return (
    <div>
      <ThemeProvider theme={OriginalTheme}>
        <CssBaseline />
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToolBar />
      </ThemeProvider>
    </div>
  );
}

export default App
