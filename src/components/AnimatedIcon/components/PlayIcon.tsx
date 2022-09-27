import { useEffect, useRef } from 'react';

import { initAnimation, toggleAnimation } from './../helpers';
import ANIMATION_DATA from './../icons/play-pause.json';
import type { TAnimatedIconProps } from './../types';
import { useAnimation } from './../useAnimation';

const rendererSettings = {
  viewBoxSize: '310 300 380 400',
};

export const PlayIcon: React.FunctionComponent<TAnimatedIconProps> = ({
  size,
  isChecked = false,
  onClick = () => {},
  ...rest
}) => {
  const initialized = useRef(false);

  const [AnimationComponent, lottieAnimation] = useAnimation({
    speed: 3,
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

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(e);
  };

  return <AnimationComponent {...rest} onClick={handleToggle} $size={size} />;
};
