import { CSSProperties, useEffect } from 'react';

import { selectors as flowSelectors } from '@/entities/flow';

import { CountryFrom, CountryTo, Currency, Form, Suggestions } from '@/widgets';
import {
  a,
  AnimatedProps,
  useSpringRef,
  useTransition,
} from '@react-spring/web';
import { useMiniApp } from '@telegram-apps/sdk-react';

const stages = {
  form: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }} className="w-full h-full">
      <Form />
    </a.div>
  ),
  countryFrom: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }}>
      <CountryFrom />
    </a.div>
  ),
  countryTo: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }}>
      <CountryTo />
    </a.div>
  ),
  currency: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }}>
      <Currency />
    </a.div>
  ),
  suggestions: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }}>
      <Suggestions />
    </a.div>
  )
} as const;

export default function MainPage() {
  const stage = flowSelectors.useStage();

  const transRef = useSpringRef();
  const transitions = useTransition(stage, {
    ref: transRef,
    from: { translateX: 100, opacity: 0 },
    enter: { translateX: 0, opacity: 1 },
    leave: { translateX: -100, opacity: 0 },
  });

  const miniApp = useMiniApp();

  useEffect(() => {
    transRef.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  useEffect(() => {
    miniApp.ready()
  }, [miniApp]);

  return (
    <>
      <a.div
        className="relative h-screen w-screen"
      >
        {transitions((style, stage) => {
          const Page = stages[stage];
          return <Page style={style} />;
        })}
      </a.div>
    </>
  );
}
