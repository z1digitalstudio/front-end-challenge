import type { Meta, Story } from '@storybook/react';

import { Input } from '.';
import { Props } from './types';

export default {
  component: Input,
  title: 'Form/Input',
  args: {
    name: 'email',
    label: 'Email',
    placeholder: 'john@doe.com',
    disabled: false,
  },
  argTypes: {
    disabled: {
      type: 'boolean',
    },
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const InputOnly = Template.bind({});
InputOnly.args = { label: 'Email', hideLabel: true };
