import { animated, useSpring } from '@react-spring/web';

export const FadeInAnimation = ({ children, delay = 0 }) => {
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: delay,
    });

    return <animated.span style={style}>{children}</animated.span>;
};
