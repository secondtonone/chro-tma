import { useEffect, useRef, useState } from 'react';

import { useSpring } from '@react-spring/web';

export const useHideOnScroll = (
  visible: boolean,
  getElement: () => Element | null
) => {
  const [isVisible, setIsVisible] = useState(visible);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = getElement();
    const handleScroll = () => {
      if (visible) {
        const currentScrollY = el?.scrollTop || 0;

        if (currentScrollY > lastScrollY.current) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }

        lastScrollY.current = currentScrollY;
      }
    };

    el?.addEventListener('scroll', handleScroll);

    return () => {
      el?.removeEventListener('scroll', handleScroll);
    };
  }, [visible, getElement]);

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  const animationProps = useSpring({
    translateY: isVisible ? 0 : 100,
    opacity: isVisible ? 1 : 0,
    config: { tension: 220, friction: 20 },
  });

  return animationProps;
};
