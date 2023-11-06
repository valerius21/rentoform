'use client'
import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"
import { BaseFormProps, Slide } from "."
import { Button } from "../ui/button"
import { findCurrentSection, findSectionsWithIds, useRentoFormAtom } from "./utils/functions"
import { useEffect } from "react"

interface FormRightSideProps extends BaseFormProps {
    // TODO: add nav button props
    controls?: React.ReactNode
}

export function FormRightSide({ children, className, controls }: FormRightSideProps) {
    const { setValue, } = useRentoFormAtom()
    useEffect(() => {
        const currID = findCurrentSection()
        const sections = findSectionsWithIds()
        setValue(state => ({ ...state, currentSection: currID, sections }))
    }, [])

    return (
        <div className={cn("relative w-full snap-y snap-mandatory overflow-y-scroll", className)}>
            {children ?? <Slide id="demo" />}
            {controls ?? <DefaultControls />}
        </div>
    )
}

function DefaultControls() {
    const { nextSection, previousSection } = useRentoFormAtom()
    return (
        <div className="sticky bottom-0 left-0 shadow-xl z-10 w-full flex flex-row justify-end pr-4 pb-4">
            <Button variant={'outline'} className="rounded-r-none border-r" onClick={previousSection}><ArrowUpIcon /></Button>
            <Button variant={'outline'} className="rounded-l-none" onClick={nextSection}><ArrowDownIcon /></Button>
        </div>
    )
}
