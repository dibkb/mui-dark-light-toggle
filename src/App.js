import React, { useState } from "react";
import "./App.css";
import { Typography, Paper, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider} from "@mui/material/styles";
import Switch from "@mui/material/Switch";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper style={{ margin: 0, padding: 0, height : '100vh'}} square elevation = {0}>
        <Container style={{}}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">
              This is {darkMode ? "light" : "dark"} mode
            </Typography>
            <Switch
              defaultChecked
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
