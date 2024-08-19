import { type PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { a, useSpringRef, useTransition } from '@react-spring/web';

export interface IModalProps extends PropsWithChildren {
  isOpen: boolean;
}

export const Modal = ({ isOpen, children }: IModalProps) => {
  const transRef = useSpringRef();
  const transitions = useTransition(isOpen, {
    ref: transRef,
    from: { scale: 0, borderRadius: '100%', width: '40px', height: '40px' },
    enter: { scale: 1, borderRadius: '0', width: '100%', height: '100%' },
    leave: {
      width: '0',
      height: '40px',
      borderRadius: '20px',
    },
    config: { duration: 600, delay: 0 },
  });

  useEffect(() => {
    transRef.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  /* const animation = useSpring({
    from: { scale: 0, borderRadius: '100%', width: '40px', height: '40px' },
    scale: isOpen ? 1 : 0,
    borderRadius: isOpen ? '0' : '100%',
    width: isOpen ? '100%' : '40px',
    height: isOpen ? '100%' : '40px',
    duration: 400,
    delay: 0,
  }); */

  return (
    <>
      {createPortal(
        <>
          {transitions(
            (style, isOpen) =>
              isOpen && (
                <div className="bg-night-500 group fixed inset-0 z-50 flex items-start justify-center bg-opacity-50 transition-opacity">
                  <div className="relative m-4 w-full max-w-lg transform overflow-hidden rounded-lg bg-transparent p-4 shadow-lg transition-all">
                    <a.div
                      className={`bg-ultra_violet-900 absolute right-0 top-0 z-0 origin-top-right`}
                      style={style}
                    />

                    <div className="z-1 relative">{children}</div>
                  </div>
                </div>
              )
          )}
        </>,
        document.getElementById('modal-root') as HTMLElement
      )}
    </>
  );
};
