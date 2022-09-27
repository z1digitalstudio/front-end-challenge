import lottie from 'lottie-web';
import {
  FunctionComponent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { AnimationWrapper } from './styles';
import type {
  IAnimationWrapper,
  IUseAnimationProps,
  TAnimationInstance,
} from './types';

export const useAnimation = ({
  speed = 1,
  renderer = 'svg',
  loop = false,
  autoplay = false,
  animationData,
}: IUseAnimationProps): [
  FunctionComponent<IAnimationWrapper>,
  TAnimationInstance,
] => {
  const [lottieAnimation, setLottieAnimation] =
    useState<TAnimationInstance>(null);

  const refContainer = useRef<HTMLDivElement>(null);

  const buildAnimation = useCallback(
    (container: HTMLDivElement): TAnimationInstance => {
      const lottieAnimationItem: TAnimationInstance = lottie.loadAnimation({
        container,
        renderer,
        loop,
        autoplay,
        animationData,
      });
      lottieAnimationItem.setSpeed(speed);
      return lottieAnimationItem;
    },
    [renderer, loop, autoplay, speed, animationData],
  );

  useEffect(() => {
    const animationContainer = refContainer?.current;
    if (animationContainer) {
      setLottieAnimation(buildAnimation(animationContainer));
    }
  }, [buildAnimation]);

  // Clear the stored lottie animation instance
  useEffect(() => () => lottieAnimation?.destroy(), [lottieAnimation]);

  const AnimationComponent = useCallback(
    (componentProps: IAnimationWrapper) => (
      <AnimationWrapper {...componentProps} ref={refContainer} />
    ),
    [refContainer],
  );

  return [AnimationComponent, lottieAnimation];
};
