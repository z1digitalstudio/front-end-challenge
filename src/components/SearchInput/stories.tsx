import type { Meta, Story } from '@storybook/react';

import { SearchInput } from '.';
import { SearchInputProps } from './types';

export default {
  component: SearchInput,
  title: 'Core/SearchInput',
  args: {
    placeholder: 'Search placeholder...',
    onChange: () => {},
    onClear: () => {},
  },
} as Meta;

const Template: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
