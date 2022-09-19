import { InputHTMLAttributes } from 'react';

export type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  className?: string;
  hideLabel?: boolean;
  label: string;
  disabled?: boolean;
};
