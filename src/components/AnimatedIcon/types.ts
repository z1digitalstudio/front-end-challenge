import { iconSizes } from '$/styles/themes/iconSizes';
import { AnimationConfigWithData, AnimationItem } from 'lottie-web';
import React from 'react';

export type TIconSizes = keyof typeof iconSizes;

export interface IAnimationWrapper extends React.ComponentPropsWithRef<'div'> {
  $size: TIconSizes;
}

export type TAnimatedIconProps = {
  size?: TIconSizes;
  isChecked: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export interface IUseAnimationProps
  extends Omit<AnimationConfigWithData, 'container'> {
  animationData: Record<string, unknown>;
  speed?: number;
}

export type TAnimationInstance = AnimationItem | null;
