import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

import { LinkFormat } from './LinkFormat';
import { FadeInAnimation } from '../FadeInAnimation';

export const Footer = () => {
    return (
        <div
            id='footer'
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '12rem',
                backgroundColor: '#353539',
                borderRadius: 5,
                paddingTop: 20,
            }}
        >
            <FadeInAnimation delay={100}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 10, fontFamily: 'Courier Prime', opacity: '.2' }}>
                            Contact Me!
                        </div>
                        <LinkFormat icon={<GitHubIcon />} href='https://www.github.com/dagensev' text='dagensev' />
                        <LinkFormat icon={<LinkedInIcon />} href='https://www.linkedin.com/in/dagen-severson-070b08208' text='Dagen Severson' />
                        <LinkFormat icon={<EmailIcon />} href='mailto: dagensev@gmail.com' text='dagensev@gmail.com' />
                    </div>
                </div>
            </FadeInAnimation>
        </div>
    );
};
