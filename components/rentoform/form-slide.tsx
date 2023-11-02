import { cn } from "@/lib/utils";
import { BaseFormProps } from ".";

export interface SlideProps extends BaseFormProps, React.HTMLAttributes<HTMLDivElement> { }

export function Slide({ children, className, ...props }: SlideProps) {
    return (
        <div className={cn("h-full snap-center", className)} {...props}>{children ?? <>Slide</>}</div>
    )
}

