import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import MenuItems from './menuItems';

const meta: Meta<typeof MenuItems> = {
  title: "banner/menu/MenuItems",
  component: MenuItems,
};

export default meta;

type Story = StoryObj<typeof MenuItems>;

export const Test: Story = {
  render: () => <MenuItems project="test" />
}