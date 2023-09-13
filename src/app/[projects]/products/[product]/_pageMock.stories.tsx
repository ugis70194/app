import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import HomeMock, {Detail} from './_pageMock';

const meta: Meta<typeof HomeMock> = {
  component: HomeMock,
  render: (args, { loaded: {detail, imgURLs} }) =>
    <HomeMock params={{detail: detail, imgURLs:imgURLs}} />
}
export default meta;

type Story = StoryObj<typeof HomeMock>;

export const Mifune: Story = {
  loaders: [
    async() => ({
      detail: await import("../../../../../public/api/test/mifune/detail.json").then((res)=> res.default as Detail),
      imgURLs:   
      [
        "/api/test/mifune/cover.jpg",
        "/api/test/mifune/sampleImages/1.jpg",
        "/api/test/mifune/sampleImages/2.jpg",
        "/api/test/mifune/sampleImages/3.jpg",
        "/api/test/mifune/sampleImages/4.jpg"
      ]
    }),
  ]
}