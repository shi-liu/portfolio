import './App.css';
import { useState } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Home from './pages/home';
import Navbar from './components/Navbar';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
import themeObject from './util/Themes';
import darkThemeObject from './util/DarkTheme';



/*
Creates two theme and switches between them based on a slider/switch.
*/

function App() {

  const [darkMode, setDark] = useState(false);

  const theme = createMuiTheme(themeObject);
  const darkTheme = createMuiTheme(darkThemeObject);
  return (
    <ThemeProvider theme={ darkMode ? darkTheme : theme}>
      <CssBaseline/>
        <Navbar/>
        <Grid container justify="flex-end">
          <SettingsBrightnessIcon/>
          <Switch color="secondary" checked={darkMode} onChange={() => setDark(!darkMode)} size="small"/>
        </Grid>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
