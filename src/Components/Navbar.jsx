import { Button } from '@mui/material';
import { Box } from '@mui/system';

export const Navbar = () => {
    return (
        <div className='navbar' style={{ paddingBottom: 40 }}>
            <div className='navbar-container'>
                <div style={{ height: 50, paddingTop: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Box sx={{ fontSize: 23, color: 'primary.main' }}>{'<ds />'}</Box>
                        <Button color='inherit' size='large' onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>
                            CONTACT ME
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
