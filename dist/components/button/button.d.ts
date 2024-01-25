import { ComponentPropsWithoutRef, ElementType } from 'react';
export declare const buttonVariant: readonly ["icon", "link", "primary", "secondary", "tertiary"];
export type ButtonVariant = (typeof buttonVariant)[number];
export type ButtonProps<T extends ElementType = 'button'> = {
    as?: T;
    fullWidth?: boolean;
    variant?: ButtonVariant;
} & ComponentPropsWithoutRef<T>;
export declare const Button: <T extends ElementType = "button">(props: ButtonProps<T>) => import("react/jsx-runtime").JSX.Element;
