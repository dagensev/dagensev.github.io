import { Box } from '@mui/material';

export const AboutMe = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <div style={{ maxWidth: '45rem' }}>
                <Box sx={{ fontSize: 30, marginBottom: 1 }}>About Me</Box>
                <div style={{ fontSize: 20 }}>
                    I am a Software Developer with experience in front-end, back-end, and database development. I work daily with JavaScript, React.js, MongoDB,
                    MySQL, & Redis. I also love rock climbing, camping, and disc golf!
                </div>
            </div>
        </div>
    );
};
