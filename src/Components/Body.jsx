import { Box } from '@mui/system';

export const Body = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <div style={{ maxWidth: '45rem' }}>
                <div>Hi, my name is</div>
                <Box sx={{ fontSize: 36, marginBottom: 1 }}>Dagen Severson.</Box>
                <Box sx={{ fontStyle: 'italic', fontFamily: 'Libre Baskerville', fontSize: 24 }}>
                    I am a Software Developer living in American Fork, UT. I have a passion for making polished & dynamic applications.
                </Box>
            </div>
        </div>
    );
};
