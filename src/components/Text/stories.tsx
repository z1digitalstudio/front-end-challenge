import type { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Text } from '.';

export default {
  component: Text,
  title: 'Core/Text',
  args: { as: 'p', variant: 'titleXL' },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'p', 'a', 'span'],
      control: { type: 'select' },
    },
    variant: {
      options: ['title1', 'body', 'body2', 'caption', 'captionBold'],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story = (args) => (
  <Text variant="title1" tag="p" {...args}>
    Jived fox nymph grabs quick waltz.
  </Text>
);

export const Title1 = Template.bind({});
Title1.args = {
  variant: 'title1',
};
export const Body = Template.bind({});
Body.args = {
  variant: 'body',
};
export const Body2 = Template.bind({});
Body2.args = {
  variant: 'body2',
};
export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
};
export const CaptionBold = Template.bind({});
CaptionBold.args = {
  variant: 'captionBold',
};

const Custom = styled(Text)`
  color: hotpink;
`;

export const CustomText = () => (
  <Custom tag="p" variant="body2">
    My awesome custom text
  </Custom>
);
