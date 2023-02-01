// import './App.css';
import '@fontsource/roboto/500.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </>
    );
};

export default App;