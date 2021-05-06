import { createMuiTheme } from '@material-ui/core/styles'
import { whiteColor, darkPrimaryColor } from './colors'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: darkPrimaryColor,
            contrastText: whiteColor
        },
    }
})

export default theme;