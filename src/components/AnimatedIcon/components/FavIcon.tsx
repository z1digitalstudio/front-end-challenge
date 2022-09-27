import { useEffect, useRef } from 'react';

import ANIMATION_DATA from './../icons/fav.json';
import type { TAnimatedIconProps, TAnimationInstance } from './../types';
import { useAnimation } from './../useAnimation';

type THandleAnimation = (
  lottieAnimation: TAnimationInstance,
  isChecked: boolean,
) => void;

const initAnimation: THandleAnimation = (lottieAnimation, isChecked) => {
  if (lottieAnimation && isChecked) {
    lottieAnimation.goToAndPlay(60, true);
  }
};

const toggleAnimation: THandleAnimation = (lottieAnimation, isChecked) => {
  if (lottieAnimation) {
    lottieAnimation.setDirection(isChecked ? 1 : -1);
    lottieAnimation.play();
  }
};

const rendererSettings = {
  viewBoxSize: '0 0 1500 1500',
};

export const FavIcon: React.FunctionComponent<TAnimatedIconProps> = ({
  size,
  isChecked = false,
  onClick = () => {},
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

  const handleToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick(e);
  };

  return <AnimationComponent {...rest} onClick={handleToggle} $size={size} />;
};
