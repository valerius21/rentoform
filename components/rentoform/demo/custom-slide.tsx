import { ComponentProps } from "react";
import { Slide } from "..";

export interface CustomSlideProps extends ComponentProps<typeof Slide> { }

export function CustomSlide({ children, ...props }: CustomSlideProps) {
    return (
        <Slide className="p-8" {...props}>
            {children}
        </Slide>
    )
}