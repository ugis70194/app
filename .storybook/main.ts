import type { StorybookConfig } from "@storybook/nextjs";
import KumaUIWebpackPlugin from "@kuma-ui/webpack-plugin";

const config: StorybookConfig = {
  stories: ["../src/app/**/*.mdx", "../src/app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs:["../public"],
  webpackFinal: (config) => {
    config.plugins = [...(config.plugins ?? []), new KumaUIWebpackPlugin({})];
    return config;
  }
};
export default config;
