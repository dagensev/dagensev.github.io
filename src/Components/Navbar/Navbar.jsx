import { Box } from '@mui/system';
import { useMemo } from 'react';

const Navbar = () => {
    const currentTime = useMemo(() => {
        const date = new Date();
        return `${date.getMonth()}/${date.getDate()}/${date.getMonth()}`;
    }, []);

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <div style={{ height: 50, padding: 20 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>Information</div>
                        <div>Pleasant Grove: {currentTime}</div>
                        <div>Instagram</div>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
