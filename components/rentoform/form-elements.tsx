import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"
import { BaseFormProps, Slide } from "."
import { Button } from "../ui/button"
import { FormRightSide } from "./form-right-side"

export function FormLeftSide({ children, className }: BaseFormProps) {
    return (
        <div className={cn("w-full hidden lg:block", className)}>{children ?? <>Left</>}</div>
    )
}

export function FormHeader({ children, className }: BaseFormProps) {

    return (
        <div className={cn("w-full flex flex-row", className)}>{children ?? <>Header</>}</div>
    )
}

export function FormFooter({ children, className }: BaseFormProps) {

    return (
        <div className={cn("w-full flex flex-row", className)}>{children ?? <>Footer</>}</div>
    )
}

export interface FormBodyProps extends BaseFormProps {
    leftChildren?: React.ReactNode
    rightChildren?: React.ReactNode
}

export function FormBody({ className, leftChildren, rightChildren }: FormBodyProps) {
    return (
        <>
            <main className={cn("flex-1 w-full flex flex-row", className)}>
                <FormLeftSide>{leftChildren}</FormLeftSide>
                <FormRightSide>{rightChildren}</FormRightSide>
            </main>
        </>
    )
}