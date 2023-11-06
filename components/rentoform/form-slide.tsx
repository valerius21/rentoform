import { cn } from "@/lib/utils";
import { BaseFormProps, } from ".";
import { idTag } from "./utils/config";

/**
 * Props for the form slide component.
 *
 * @template BaseFormProps - Base form props.
 * @template React.HTMLAttributes<HTMLDivElement> - HTML div element attributes.
 */
export interface SlideProps extends BaseFormProps, React.HTMLAttributes<HTMLDivElement> {
    /**
     * The id of the slide. This is used to identify the slide in the form.
     */
    id: string;
}


export function Slide({ children, className, id, ...props }: SlideProps) {
    return (
        <div id={`${idTag}-${id}`} className={cn("h-full snap-center", className)} {...props}>{children ?? <>Slide</>}</div>
    )
}

