import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Thumbnail from './thumbnail';
import { thumbnail } from './thumbnail';
import ThumbnailForSwitchTest from './thubnailForSwitchTest';

const meta: Meta<typeof Thumbnail> = {
  title: "thumbnail/thumbnail",
  component: Thumbnail,
};

export default meta;

type Story = StoryObj<typeof Thumbnail>;

const notR18Data: thumbnail = {
  title: 'mifune',
  type: 'novel',
  genre: 'niji',
  r18: false,
};

const R18Data: thumbnail = {
  title: 'mifune',
  type: 'novel',
  genre: 'niji',
  r18: true,
};

export const notR18: Story = {
  render: () => <Thumbnail thumbnailData={notR18Data} project='test'/>
}

export const R18: Story = {
  render: () => <Thumbnail thumbnailData={R18Data} project='test' />
}

export const switchTest: Story = {
  render: () => <ThumbnailForSwitchTest thumbnailData={R18Data} project='test' />
}