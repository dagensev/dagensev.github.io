import { Navbar } from './Navbar';
import { Body } from './Body';
import { Footer } from './Footer/View';
import { AboutMe } from './AboutMe';
import { FadeInAnimation } from './FadeInAnimation';

const Home = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div style={{ paddingBottom: '14rem' }}>
                <FadeInAnimation delay={100}>
                    <Navbar />
                    <Body />
                    <div style={{ display: 'flex', justifyContent: 'center', fontSize: 25, opacity: '.1', padding: 25 }}>{'</>'}</div>
                    <AboutMe />
                </FadeInAnimation>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
