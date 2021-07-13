import { createMuiTheme } from '@material-ui/core';

export const TITLE_FONT_FAMILY = '\'Bodoni Moda\', serif';
export const DEFAULT_FONT_FAMILY = '\'Roboto\', \'Helvetica\', \'Arial\', sans-serif';
export const LIGTH_GRAY_COLOR = '#A1A1A1';
export const MEDDIUM_GRAY_COLOR = '#F8F9FA';

export const Theme = createMuiTheme({
  typography: {
    fontFamily: DEFAULT_FONT_FAMILY,
    h2: {
      fontSize: '2rem',
      fontFamily: TITLE_FONT_FAMILY,
    },
    subtitle1: {
      fontFamily: TITLE_FONT_FAMILY,
    },
  },
  palette: {
    secondary: {
      main: MEDDIUM_GRAY_COLOR,
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        fontFamily: TITLE_FONT_FAMILY,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '0.875rem',
      }
    },
  },
});
