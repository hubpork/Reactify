import type { Meta, StoryObj } from '@storybook/react';
import PrimeButton from "./Button";


const meta = {
    component: PrimeButton,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        buttonBgColor: { control: 'color' },
    },
} satisfies Meta<typeof PrimeButton>;
  
  export default meta;
  type Story = StoryObj<typeof PrimeButton>;
  
  export const Primary: Story = {
    args: {
      //primary: true,
      children: 'Button',
    },
  };
  
  export const Secondary: Story = {
    args: {
    children: 'Button',
    },
  };