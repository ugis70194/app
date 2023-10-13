import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import R18Switch from './r18switch';

const meta: Meta<typeof R18Switch> = {
  title: "banner/switch/R18Switch",
  component: R18Switch,
};

export default meta;

type Story = StoryObj<typeof R18Switch>;

export const Test: Story = {
  render: () => <R18Switch />
}