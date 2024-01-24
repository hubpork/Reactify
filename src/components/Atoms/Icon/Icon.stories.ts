import type { Meta, StoryObj } from '@storybook/react';
import IconComponent from "./Index";
import "../../../index.css"


const meta = {
    //title: 'Example/Button',
    component: IconComponent,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // iconName: {
        //     control: '-',
        // },
        iconIsRight: {
            control: '-',
        },
        iconColor: { control: 'color' },
    },
} satisfies Meta<typeof IconComponent>;
  
  export default meta;
  type Story = StoryObj<typeof IconComponent>;
  
  export const Primary: Story = {
    args: {
        iconName: "FaBeer",
        iconColor: "text-[black]",
        iconSize: "size-4",
    },
  };

  export const Large: Story = {
    args: {
        iconName: "FaStar",
        iconColor: "text-primary-700",
        iconSize: "size-8",
    },
  };
  