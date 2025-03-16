import { Box } from '@mui/material';

export const AboutMe = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: 20, paddingRight: 20 }}>
            <div style={{ maxWidth: '45rem' }}>
                <Box sx={{ fontSize: 30, marginBottom: 1 }}>About Me</Box>
                <div style={{ fontSize: 20 }}>
                    Motivated and detail-oriented Software Developer with project experience in developing fulfillment software using APIs including
                    ShipStation, FedEx, and eBay. Skilled in front-end, back-end, and database development, including expertise in JavaScript, HTML/CSS, and
                    frameworks like React and Node.js. I also love rock climbing, camping, and disc golf!
                </div>
            </div>
        </div>
    );
};
