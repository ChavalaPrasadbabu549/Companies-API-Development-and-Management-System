import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import theme from './mui/Theme.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
        <ToastContainer />
  </StrictMode>,
)
