import { THandleAnimation } from './types';

export const initAnimation: THandleAnimation = (lottieAnimation, isChecked) => {
  if (lottieAnimation && isChecked) {
    const totalFrames = lottieAnimation.totalFrames;
    lottieAnimation.goToAndStop(totalFrames, true);
  }
};

export const toggleAnimation: THandleAnimation = (
  lottieAnimation,
  isChecked,
) => {
  if (lottieAnimation) {
    lottieAnimation.setDirection(isChecked ? 1 : -1);
    lottieAnimation.play();
  }
};
