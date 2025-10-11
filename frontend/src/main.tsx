import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import { GlobalProvider, useGlobalContext } from './hooks/GlobalContext.tsx';
import getTheme from './mui/Theme.tsx';


const AppWrapper = () => {
  const { themeMode } = useGlobalContext();
  const theme = getTheme(themeMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ToastContainer />
    </ThemeProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <AppWrapper />
    </GlobalProvider>
  </StrictMode>
)
