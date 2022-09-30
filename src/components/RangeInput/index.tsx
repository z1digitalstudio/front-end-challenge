import { InputHTMLAttributes } from 'react';

import { RangeInputStyle } from './styles';

interface IRangeInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: number;
  min: number;
  max: number;
}

export const RangeInput: React.FC<IRangeInputProps> = ({
  value = 0,
  min = 0,
  max = 100,
  ...rest
}) => {
  const $value = ((value - min) / (max - min)) * 100;
  return (
    <RangeInputStyle
      {...rest}
      $value={$value}
      value={value}
      min={min}
      max={max}
      type="range"
    />
  );
};
