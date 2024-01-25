/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    argTypes: {
        onClick: {
            action: string;
        };
        variant: {
            control: {
                type: string;
            };
            options: string[];
        };
    };
    component: <T extends import("react").ElementType = "button">(props: import("./button").ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    title: string;
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Tertiary: Story;
export declare const Link: Story;
export declare const FullWidth: Story;
export declare const AsLink: Story;
