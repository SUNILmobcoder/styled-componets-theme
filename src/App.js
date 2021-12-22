import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { colorSwitch } from './redux/colorAction';
import { lightTheme, darkTheme, grayTheme } from './config/colors';
import GlobalStyle from './GlobalStyle';
import HomePage from './pages/HomePage';

const App = () => {
  const theme = useSelector((state) => state.themeReducer.theme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <button onClick={() => dispatch(colorSwitch(lightTheme))}>Light</button>
      <button onClick={() => dispatch(colorSwitch(darkTheme))}>Dark</button>
      <button onClick={() => dispatch(colorSwitch(grayTheme))}>Gray</button>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};

export default App;
