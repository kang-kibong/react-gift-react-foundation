import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '@components/common/Button';

const meta: Meta<ButtonProps> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: { type: 'select', options: ['primary', 'kakao'] },
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large', 'responsive'] },
    },
  },
};

export default meta;

const Template: StoryFn<ButtonProps> = function Tempalte(args: ButtonProps) {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: '버튼 텍스트',
  theme: 'primary',
  size: 'medium',
};
