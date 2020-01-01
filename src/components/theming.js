import { createTheming } from '@callstack/react-theme-provider'
import { lighten } from 'polished'
import colors from '../lib/colors'

const themes = {
  default: {
    themeName: 'default',
    colors: {
      primary: colors.orange,
      text: colors.black,
      bodyBg: colors.gray,
      headerBg: colors.orange,
      link: colors.orange,
      ...colors,
    },
  },
  dark: {
    themeName: 'dark',
    colors: {
      primary: lighten(0.05, colors.orange),
      text: colors.white,
      bodyBg: colors.black,
      headerBg: colors.orange,
      link: lighten(0.05, colors.orange),
      ...colors,
    },
  },
}

const { ThemeProvider, withTheme, useTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, useTheme, themes, colors }
