import { createTheming } from '@callstack/react-theme-provide';
import { lighten } from 'polished';
import colors from './colors'

const theme = {
    default : {
        themeName: 'defaultColor',
        colors: {
            primary: colors.orange,
            text: colors.black,
            headerBg: colors.orange,
            link: colors.orange,
            ...colors,
        },
    },
    dark: {
        themeName : 'darkColor',
        colors: {
            primary: lighten(0.07, colors.orange),
            text: colors.white,
            headerBg: colors.black,
            limk: lighten(0.07, colors.orange),
            ...colors,
        },
    },
}

const { ThemeProvider, withTheme, UseTheme } = createTheming(themes.default)

export { ThemeProvider, withTheme, UseTheme, theme, colors }