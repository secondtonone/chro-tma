import { useEffect } from 'react';

interface DeviceMotionEventExtended extends DeviceMotionEvent {
  requestPermission?: () => Promise<'granted' | 'denied'>;
}

export function useShaking(handler?: () => void, threshold = 15) {
  useEffect(() => {
    const handleOrientation = (event: DeviceMotionEvent) => {
      const { accelerationIncludingGravity } = event;
      if (
        accelerationIncludingGravity?.x ||
        accelerationIncludingGravity?.y ||
        accelerationIncludingGravity?.z
      ) {
        const { x, y, z } = accelerationIncludingGravity as {
          x: number;
          y: number;
          z: number;
        };

        const shake = Math.sqrt(x * x + y * y + z * z);
        if (shake > threshold) {
          if (handler) handler();
        }
      }
    };

    const debouncedHandleOrientation = handleOrientation;

    const deviceMotionionEvent =
      DeviceMotionEvent as unknown as DeviceMotionEventExtended;

    if (typeof deviceMotionionEvent?.requestPermission === 'function') {
      deviceMotionionEvent.requestPermission().then((response) => {
        if (response == 'granted') {
          window.addEventListener('devicemotion', debouncedHandleOrientation);
        }
      });
    } else {
      window.addEventListener('devicemotion', debouncedHandleOrientation);
    }

    return () => {
      window.removeEventListener('devicemotion', debouncedHandleOrientation);
    };
  }, [handler, threshold]);
}
