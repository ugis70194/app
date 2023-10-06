import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Banner from './banner';
import Menu from './_menu/menu'

const meta: Meta<typeof Banner> = {
  title: "banner/Banner",
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Test: Story = {
  render: () => 
  <Banner>
    <Menu project='test' />
  </Banner>
}