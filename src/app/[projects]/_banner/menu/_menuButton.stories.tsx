import React, { useReducer } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { reducer } from './_menu'
import MenuButton from './_menuButton';

const meta: Meta<typeof MenuButton> = {
  title: "MenuButton",
  component: MenuButton,
};

export default meta;

type Story = StoryObj<typeof MenuButton>;

function MenuButtonWithHooks(){
  const [isOpen, toggle] = useReducer(reducer, false);
  return <MenuButton isOpen={isOpen} toggle={toggle} />;
}

export const Test: Story = {
  render: () => <MenuButtonWithHooks />
};