import { throttle } from 'lodash-es';
import { useEffect } from 'react';

import { useSpring } from '@react-spring/web';

interface DeviceOrientationEventExtended extends DeviceOrientationEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

export function useTwitching() {
  const [animationProps, api] = useSpring(() => ({
    transform: 'perspective(600px)',
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
    translateX: 0,
    translateY: 0,
    zIndex: 1,
  }));

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (
        event &&
        typeof event.alpha === 'number' &&
        typeof event.beta === 'number' &&
        typeof event.gamma === 'number'
      ) {
        const { beta, gamma, alpha } = event;

        const a = alpha > 180 ? alpha - 360 : alpha;
        const b = beta - 90;
        const g = gamma > 180 ? 360 - gamma : -gamma;

        api.start({
          rotateX: Math.round(b / 10),
          rotateY: Math.round(g / 20),
          rotateZ: Math.round(a / 10),
          translateY: Math.round(g / 20),
          translateX: Math.round(b / 20),
          zIndex: 1,
        });
      }
    };

    const debouncedHandleOrientation = throttle(handleOrientation, 100);

    const deviceOrientationEvent =
      DeviceOrientationEvent as unknown as DeviceOrientationEventExtended;

    if (typeof deviceOrientationEvent?.requestPermission === 'function') {
      deviceOrientationEvent.requestPermission().then((response) => {
        if (response == 'granted') {
          window.addEventListener(
            'deviceorientation',
            debouncedHandleOrientation
          );
        }
      });
    } else {
      window.addEventListener('deviceorientation', debouncedHandleOrientation);
    }

    return () => {
      window.removeEventListener(
        'deviceorientation',
        debouncedHandleOrientation
      );
    };
  }, [api]);

  return animationProps;
}
