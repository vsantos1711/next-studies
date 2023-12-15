import { StoryObj, Meta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Default: StoryObj = {};

export const Example: StoryObj = {
  args: {
    title: 'Example',
    description: 'Example',
  },
};
