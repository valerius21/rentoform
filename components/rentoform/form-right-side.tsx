'use client'
import { cn } from "@/lib/utils"
import { ArrowUpIcon, ArrowDownIcon } from "@radix-ui/react-icons"
import { BaseFormProps, Slide } from "."
import { Button } from "../ui/button"
import { findCurrentSection, findSectionsWithIds, useRentoFormAtom } from "./utils/functions"
import { useEffect, useRef } from "react"
import { useDebounce } from "@uidotdev/usehooks"
import { useElementScroll } from "./hooks/use-element-scroll"

interface FormRightSideProps extends BaseFormProps, React.HTMLAttributes<HTMLFormElement> {
    controls?: React.ReactNode
}

export function FormRightSide({ children, className, controls, ...props }: FormRightSideProps) {
    const { setValue, value: { sections, currentSection } } = useRentoFormAtom()

    // manage current section for control buttons
    const ref = useRef<HTMLFormElement>(null)
    const [scrollState, _] = useElementScroll(ref)
    const debounceIntervalMs = 100
    const debouncedY = useDebounce(scrollState, debounceIntervalMs)
    useEffect(() => {
        const currID = findCurrentSection()
        const currSections = findSectionsWithIds()
        if (currID === currentSection) return

        // update sections
        setValue(state => ({ ...state, currentSection: currID, sections: currSections }))
    }, [debouncedY])

    const showControls = sections.length > 1

    return (
        <form ref={ref} className={cn("relative h-full w-full snap-y snap-mandatory overflow-y-scroll", className)} {...props}>
            {children ?? <Slide id="demo" />}
            {showControls ? <>{controls ?? <DefaultControls />}</> : null}
        </form>
    )
}

function DefaultControls() {
    const { nextSection, previousSection } = useRentoFormAtom()
    return (
        <div className="sticky z-10 bottom-0 left-0 shadow-xl w-full flex flex-row justify-end pr-4 pb-4">
            <Button type='button' variant={'outline'} className="rounded-r-none border-r" onClick={nextSection}><ArrowDownIcon /></Button>
            <Button type='button' variant={'outline'} className="rounded-l-none" onClick={previousSection}><ArrowUpIcon /></Button>
        </div>
    )
}
