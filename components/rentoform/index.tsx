import { cn } from "@/lib/utils"
import { FormHeader, FormBody, FormFooter, FormBodyProps } from "./form-elements"
import { RentformConfig } from "./utils/config"

export * from './form-elements'
export * from './form-slide'

export interface BaseFormProps {
    children?: React.ReactNode
    className?: string
}

export interface FormLayoutProps extends FormBodyProps {
    footer?: React.ReactNode
    header?: React.ReactNode
}


export function FormLayout({ className, header, footer, leftChildren, rightChildren }: FormLayoutProps) {
    return (
        <div className={cn("h-screen w-screen flex flex-col", className)}>
            <FormHeader>{header}</FormHeader>
            <FormBody leftChildren={leftChildren} rightChildren={rightChildren} />
            <FormFooter>{footer}</FormFooter>
        </div>
    )
}

export function Rentoform({ config, }: { config: RentformConfig }) {
    return <FormLayout />
}