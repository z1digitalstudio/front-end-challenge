import { Text } from '$/components/Text';

import { PillContainer } from './styles';
import type { PillProps } from './types';

export const Pill = ({ text, ...rest }: PillProps) => {
  const formattedText = text.replaceAll('_', ' ').toLowerCase();
  return (
    <PillContainer {...rest}>
      <Text tag="small" variant="caption">
        {formattedText}
      </Text>
    </PillContainer>
  );
};
