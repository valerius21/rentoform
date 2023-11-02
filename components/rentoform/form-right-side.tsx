import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"
import { BaseFormProps, Slide } from "."
import { Button } from "../ui/button"

interface FormRightSideProps extends BaseFormProps {
    // TODO: add nav button props
    controls?: React.ReactNode
}

export function FormRightSide({ children, className, controls }: FormRightSideProps) {
    return (
        <div className={cn("relative w-full snap-y snap-mandatory overflow-y-scroll", className)}>
            {children ?? <Slide />}
            {controls ?? <DefaultControls />}
        </div>
    )
}

function DefaultControls() {
    return (
        <div className="sticky bottom-0 left-0 shadow-xl z-10 w-full flex flex-row justify-end pr-4 pb-4">
            <Button variant={'outline'} className="rounded-r-none border-r"><ArrowUpIcon /></Button>
            <Button variant={'outline'} className="rounded-l-none"><ArrowDownIcon /></Button>
        </div>
    )
}
