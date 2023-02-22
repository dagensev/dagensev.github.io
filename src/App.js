import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/500.css';
import 'typeface-libre-baskerville';
import 'typeface-courier-prime';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

const theme = createTheme({
    palette: {
        background: {
            default: '#1f1f24',
        },
        text: {
            primary: '#fdfcfe',
        },
        typography: {
            fontFamily: ['Libre Baskerville', 'Courier Prime'].join(','),
        },
        palette: {
            primary: {
                main: '#5B8FB9',
            },
        },
    },
});

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </CssBaseline>
            </ThemeProvider>
        </>
    );
};

export default App;
