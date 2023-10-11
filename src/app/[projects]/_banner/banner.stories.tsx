import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Banner from './banner';
import Menu from './_menu/menu';
import R18Switch from './_switch/r18switch';

const meta: Meta<typeof Banner> = {
  title: "banner/Banner",
  component: Banner,
};

export default meta;

type Story = StoryObj<typeof Banner>;

export const Test: Story = {
  render: () => 
  <Banner>
    <R18Switch />
    <Menu project='test' />
  </Banner>
}