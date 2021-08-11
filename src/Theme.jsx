import { ThemeProvider } from "styled-components";

const theme = {
    color : {
        primary: '#7d2ecc',
        light: '#f0f0f0',
    }
}

const Theme = ({ children }) => {
    return <ThemeProvider theme={theme}>{ children }</ThemeProvider>
}

export default Theme