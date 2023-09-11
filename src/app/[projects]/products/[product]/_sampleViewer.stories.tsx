import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SampleViewer from './_sampleViewer'

const meta: Meta<typeof SampleViewer> = {
  title: "SampleViewer",
  component: SampleViewer,
};

export default meta;

type Story = StoryObj<typeof SampleViewer>;

export const Mifune: Story = {
  render: () => <SampleViewer imgURLs={
  [
    "/api/test/mifune/cover.jpg",
    "/api/test/mifune/sampleImages/1.jpg",
    "/api/test/mifune/sampleImages/2.jpg",
    "/api/test/mifune/sampleImages/3.jpg",
    "/api/test/mifune/sampleImages/4.jpg"
  ]
  } />
}