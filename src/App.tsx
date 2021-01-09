import { UnderConstruction } from '@admiralfeb/react-components';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Home } from 'components/home';
import { theme } from 'theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
      <UnderConstruction title="Admiralfeb.net is being rewritten" />;
    </ThemeProvider>
  );
};
