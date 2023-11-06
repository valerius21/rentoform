import { FormLayout, FormLeftSide, Slide } from "..";
import { FormRightSide } from "../form-right-side";
import { rentoformConfig } from "../utils/config";
import RightDemoForm from "./form";
import { Suspense } from "react";

export function DemoForm() {
    return (
        <FormLayout
            header={<Header />}
            footer={<Footer />}
            className="py-4 gap-4"
        >
            <FormLeftSide>
                <LeftSide />
            </FormLeftSide>
            <RightDemoForm />
        </FormLayout>
    )
}

function LeftSide() {
    return (
        <div className="bg-primary h-full p-8 text-primary-foreground">
            <p>This is the Left Side of the Form canvas. Put anything there that you like.</p>
        </div>
    )
}

// Simple Demo Header
function Header() {
    return (
        <div className="flex flex-row w-full justify-between px-8">
            <div className="flex items-center gap-4">
                <img src={rentoformConfig.logo} alt="logo" className="w-12 h-12" />
                <h2 className="font-bold">{rentoformConfig.name}</h2>
            </div>
            <div className="flex flex-row gap-4">
                <span className="hover:underline hover:scale-105 transition cursor-pointer">Menu Item 1</span>
                <span className="hover:underline hover:scale-105 transition cursor-pointer">Menu Item 2</span>
                <span className="hover:underline hover:scale-105 transition cursor-pointer">Menu Item 3</span>
                <span className="hover:underline hover:scale-105 transition cursor-pointer">Menu Item 4</span>
            </div>
        </div>
    )
}

// Simple Demo Footer
function Footer() {
    return (
        <div className="w-full text-center text-sm">
            <p>
                Build by
                {' '}
                <a href="https://bento.me/valerius21" target="_blank" className="underline">Valerius Mattfeld</a>
                .
            </p>
        </div>
    )
}