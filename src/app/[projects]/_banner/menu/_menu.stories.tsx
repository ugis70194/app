import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Menu from './_menu';

const meta: Meta<typeof Menu> = {
  title: "Menu",
  component: Menu,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const Test: Story = {
  render: () => <Menu projectName='test'/>
}