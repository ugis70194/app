import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MenuButton from './menuButton';

const meta: Meta<typeof MenuButton> = {
  title: "banner/menu/MenuButton",
  component: MenuButton,
};

export default meta;

type Story = StoryObj<typeof MenuButton>;

export const Test: Story = {
  render: () => <MenuButton  />
}