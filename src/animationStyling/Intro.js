// IconAnimations.js
import { useSpring, animated } from 'react-spring';

export const springAnimation = {
  from: { transform: 'translateY(0)', opacity: 0.5 },
  to: async (next) => {
    await next({ transform: 'translateY(-20px)', opacity: 1 });
    await next({ transform: 'translateY(0)', opacity: 1 });
  },
  config: { tension: 300, friction: 10 },
};

export const useSpringAnimation = () => {
  return useSpring(springAnimation);
};

export const AnimatedSpringIcon = ({ icon, style }) => {
  const animatedProps = useSpringAnimation();
  return <animated.div style={{ ...style, ...animatedProps }}>{icon}</animated.div>;
};
