import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Menu from './menu';

const meta: Meta<typeof Menu> = {
  title: "banner/menu/Menu",
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Test: Story = {
  render: () => <Menu project='test'/>
}