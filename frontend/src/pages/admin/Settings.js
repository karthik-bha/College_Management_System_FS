
import React, { useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Settings = () => {
  // Initialize dark mode state
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode setting
  const handleDarkModeToggle = () => {
    // Update dark mode state
    setDarkMode(!darkMode);
    // Store user preference (e.g., using localStorage)
    localStorage.setItem('darkMode', !darkMode);
  };

  // Define dark mode theme
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      // Define dark mode colors and other theme configurations
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Settings</h1>
        <FormControlLabel
          control={<Switch checked={darkMode} onChange={handleDarkModeToggle} />}
          label="Dark Mode"
        />
      </div>
    </ThemeProvider>
  );
};

export default Settings;
