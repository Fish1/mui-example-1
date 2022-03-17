import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import NotesPage from './pages/NotesPage';

import { createTheme, ThemeProvider } from "@mui/material";
import { orange, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff00ff"
    },
    secondary: orange,
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 100,
    fontWeightRegular: 200,
    fontWeightMedium: 300,
    fontWeightBold: 700,

  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/notes" element={<NotesPage></NotesPage>}/>
          <Route path="/create" element={<CreatePage></CreatePage>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
