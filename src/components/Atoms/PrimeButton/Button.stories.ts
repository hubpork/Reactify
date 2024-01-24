import type { Meta, StoryObj } from '@storybook/react';
import PrimeButton from "./Button";
import "../../../index.css"


const meta = {
    //title: 'Example/Button',
    component: PrimeButton,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      url: {
        control: '-',
      }
    },
} satisfies Meta<typeof PrimeButton>;
  
  export default meta;
  type Story = StoryObj<typeof PrimeButton>;
  
  export const Primary: Story = {
    args: {
      primary: true,
      label: 'Button',
    },
  };
  
  export const Large: Story = {
    args: {
      size: 'large',
      label: 'Button',
    },
  };
  
  export const Small: Story = {
    args: {
      size: 'small',
      label: 'Button',
    },
  };
  