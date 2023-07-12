import { Meta, StoryObj } from '@storybook/react';
import Typography from 'src/components/Typography/Typography';

const meta: Meta<typeof Typography> = {
    component: Typography,
    args: {
        children: 'Hello World',
    },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H1: Story = {
    args: {
        as: 'h1',
    },
};

export const H2: Story = {
    args: {
        as: 'h2',
    },
};

export const H3: Story = {
    args: {
        as: 'h3',
    },
};

export const H4: Story = {
    args: {
        as: 'h4',
    },
};

export const H5: Story = {
    args: {
        as: 'h5',
    },
};

export const H6: Story = {
    args: {
        as: 'h6',
    },
};
