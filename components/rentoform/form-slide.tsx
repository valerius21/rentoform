import { cn } from "@/lib/utils";
import { BaseFormProps, idTag } from ".";

export interface SlideProps extends BaseFormProps, React.HTMLAttributes<HTMLDivElement> {
    id: string
}


export function Slide({ children, className, id, ...props }: SlideProps) {
    return (
        <div id={`${idTag}-${id}`} className={cn("h-full snap-center", className)} {...props}>{children ?? <>Slide</>}</div>
    )
}

