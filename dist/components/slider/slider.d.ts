/// <reference types="react" />
import * as SliderPrimitive from '@radix-ui/react-slider';
declare const Slider: import("react").ForwardRefExoticComponent<Omit<Omit<SliderPrimitive.SliderProps & import("react").RefAttributes<HTMLSpanElement>, "ref">, "value"> & {
    value?: (number | undefined)[] | undefined;
} & import("react").RefAttributes<HTMLSpanElement>>;
export { Slider };
