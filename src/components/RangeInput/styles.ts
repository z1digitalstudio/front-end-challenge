import styled from 'styled-components';

export const RangeInputStyle = styled.input<{ $value: number }>`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.malibu500} 0%,
    ${({ theme, $value }) => `${theme.color.malibu500}  ${$value}%`},
    ${({ theme, $value }) => `${theme.color.grayscale600}  ${$value}%`},
    ${({ theme }) => theme.color.grayscale600} 100%
  );
  border: none;
  border-radius: 4px;
  height: 4px;
  width: 100%;
  outline: none;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    width: 10px;
    height: 10px;
    -webkit-appearance: none;
    border: none;
    border-radius: 5px;
    background-color: #ffffff;
  }

  /** FF*/
  &::-moz-range-thumb {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
  }

  /* IE*/
  &::-ms-thumb {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    border: none;
    border-radius: 5px;
    margin-top: 0px;
  }
`;
