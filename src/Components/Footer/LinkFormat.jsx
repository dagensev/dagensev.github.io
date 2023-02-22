import { IconButton } from '@mui/material';
import { BoopAnimation } from './BoopAnimation';

export const LinkFormat = ({ icon, href, text }) => {
    return (
        <div style={{ marginBottom: 1, display: 'flex' }}>
            <BoopAnimation>
                <IconButton href={href} color='primary'>
                    {icon}
                </IconButton>
                <a style={{ alignSelf: 'center', textDecoration: 'none', color: 'inherit', fontFamily: 'Courier Prime' }} href={href}>
                    {text}
                </a>
            </BoopAnimation>
        </div>
    );
};
