import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

export const BoopAnimation = ({ children }) => {
    const [isBooped, setIsBooped] = useState(false);

    const style = useSpring({
        display: 'inline-block',
        backfaceVisibility: 'hidden',
        transform: isBooped ? `translate(1px, 0px)` : `translate(0px, 0px)`,
        config: {
            tension: 300,
            friction: 10,
        },
    });

    useEffect(() => {
        if (!isBooped) return;

        const timeoutId = window.setTimeout(() => {
            setIsBooped(false);
        }, 150);

        return () => window.clearTimeout(timeoutId);
    }, [isBooped]);

    const trigger = () => {
        setIsBooped(true);
    };

    return (
        <animated.span onMouseEnter={trigger} style={style}>
            {children}
        </animated.span>
    );
};
