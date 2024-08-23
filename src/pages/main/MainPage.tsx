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
    <a.div style={{ ...style }} className="h-full w-full">
      <Form />
    </a.div>
  ),
  countryFrom: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }} className="h-full w-full">
      <CountryFrom />
    </a.div>
  ),
  countryTo: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }} className="h-full w-full">
      <CountryTo />
    </a.div>
  ),
  currency: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }} className="h-full w-full">
      <Currency />
    </a.div>
  ),
  suggestions: ({ style }: AnimatedProps<{ style: CSSProperties }>) => (
    <a.div style={{ ...style }} className="h-full w-full">
      <Suggestions />
    </a.div>
  ),
} as const;

export default function MainPage() {
  const stage = flowSelectors.useStage();

  const transRef = useSpringRef();
  const transitions = useTransition(stage, {
    ref: transRef,
    from: { translateY: -200, opacity: 0 },
    enter: { translateY: 0, opacity: 1 },
    leave: { translateY: 100, opacity: 0 },
  });

  const miniApp = useMiniApp();

  useEffect(() => {
    transRef.start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage]);

  useEffect(() => {
    miniApp.ready();
  }, [miniApp]);

  return (
    <div className="flex items-center justify-center">
      <a.div className="relative h-screen w-screen bg-background sm:w-[400px]">
        {transitions((style, stage) => {
          const Page = stages[stage];
          return <Page style={style} />;
        })}
      </a.div>
    </div>
  );
}
