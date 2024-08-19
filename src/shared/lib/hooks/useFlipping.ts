import { useRef } from 'react';

import { useSpring } from '@react-spring/web';
import { useGesture } from '@use-gesture/react';

export interface IFlippingProps {
  onFlipped?: () => void;
  isFlipped?: boolean;
  onTouchMove?: (
    e: PointerEvent | MouseEvent | TouchEvent | KeyboardEvent,
    isFlipped: boolean
  ) => void;
}

// const minSwipeDistance = 20;
const swipeDivider = 2;

export const useFlipping = ({
  onFlipped,
  isFlipped = false,
  /* setFlip, */
  onTouchMove: onTouchMoveHandler,
}: IFlippingProps) => {
  const flipped = useRef(isFlipped);
  const [{ transform, opacity, rotateY, scale }, api] = useSpring(() => ({
    opacity: flipped.current ? 1 : 0,
    transform: `perspective(600px)`,
    rotateY: flipped.current ? 180 : 0,
    scale: 1,
    config: { mass: 5, tension: 500, friction: 80 },
  }));

  const bind = useGesture({
    onDrag: ({ event, down, movement: [clientX] }) => {
      if (onTouchMoveHandler) onTouchMoveHandler(event, flipped.current);
      if (down && !flipped.current) {
        console.log(clientX);
        const distance = /* initialX - */ clientX;
        const deg = Math.abs(distance);
        const multiplier = Math.sign(distance);

        if (deg / swipeDivider >= 90) {
          api.start({
            rotateY: 180 * multiplier,
            opacity: 1,
            scale: 1,
            translateX: -300,
            onRest: () => {
              if (onFlipped) onFlipped();
            },
          });

          flipped.current = true;
        } else {
          api.start({
            rotateY: (deg / swipeDivider) * multiplier,
            scale: 1.1,
          });
        }
      } else {
        if (!flipped.current) {
          api.start({
            rotateY: 0,
            scale: 1,
          });
        }
      }
    },
    /* onDragStart: ({ xy: [clientX], event }) => {
      if (onTouchStartHandler) onTouchStartHandler(event, flipped);
      setTouchStart(clientX);
      console.log(clientX);
    }, */
    /* onDragEnd: (state) => {
      if (onTouchEndHandler) onTouchEndHandler(state.event, flipped);
      if (flipped) return;
      api.start({
        rotateY: 0,
        scale: 1,
      });
    }, */
  });

  /*   if (onTouchStartHandler) onTouchStartHandler(e, flipped);
  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    console.log(e.targetTouches[0].clientX);
  };

  const onTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (onTouchMoveHandler) onTouchMoveHandler(e, flipped);
    console.log(e.targetTouches[0].clientX);
    if (flipped) return;
    const distance = touchStart - e.targetTouches[0].clientX;
    const deg = Math.abs(distance);
    const multiplier = Math.sign(distance);

    api.start({
      rotateY: (deg / swipeDivider) * multiplier,
      scale: 1.1,
    });

    if (deg / swipeDivider >= 90) {
      setFlip();
      api.start({
        rotateY: 180 * multiplier,
        opacity: 1,
        scale: 1,
      });

      if (onFlipped) onFlipped();
    }
  };

  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (onTouchEndHandler) onTouchEndHandler(e, flipped);
    if (flipped) return;
    api.start({
      rotateY: 0,
      scale: 1,
    });
  }; */

  return {
    /* onTouchStart,
    onTouchMove,
    onTouchEnd, */
    scale,
    transform,
    opacity,
    rotateY,
    bind,
  };
};
