import { useEffect, useRef } from 'react';

import ANIMATION_DATA from './../icons/play-pause.json';
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

export const PlayIcon: React.FunctionComponent<TAnimatedIconProps> = ({
  size = 'regular',
  isChecked = false,
  onClick = () => {},
  ...rest
}) => {
  const initialized = useRef(false);

  const [AnimationComponent, lottieAnimation] = useAnimation({
    speed: 3,
    autoplay: false,
    animationData: ANIMATION_DATA,
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

  return (
    <AnimationComponent
      {...rest}
      onClick={handleToggle}
      $size={size}
      className="fav-icon"
    />
  );
};
