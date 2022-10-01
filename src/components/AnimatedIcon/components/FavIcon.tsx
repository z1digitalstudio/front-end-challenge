import { useEffect, useRef } from 'react';

import { initAnimation, toggleAnimation } from './../helpers';
import ANIMATION_DATA from './../icons/fav.json';
import type { TAnimatedIconProps } from './../types';
import { useAnimation } from './../useAnimation';

const rendererSettings = {
  viewBoxSize: '0 0 1500 1500',
};

export const FavIcon: React.FunctionComponent<TAnimatedIconProps> = ({
  size,
  isChecked = false,
  ...rest
}) => {
  const initialized = useRef(false);

  const [AnimationComponent, lottieAnimation] = useAnimation({
    speed: 2,
    autoplay: false,
    animationData: ANIMATION_DATA,
    rendererSettings,
  });

  useEffect(() => {
    const { current: isInitialized } = initialized;
    if (lottieAnimation) {
      const exec = isInitialized ? toggleAnimation : initAnimation;
      exec(lottieAnimation, isChecked);
      initialized.current = true;
    }
  }, [lottieAnimation, isChecked]);

  return <AnimationComponent {...rest} $size={size} />;
};
