'use client'

import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import { CustomSlide } from "./custom-slide"
import { DemoRegistrationData, DemoRegistrationSchema } from "./schema"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormRightSide } from "../form-right-side"

export default function RightDemoForm() {
    const form = useForm<DemoRegistrationData>({
        resolver: valibotResolver(DemoRegistrationSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
        },

    })

    function onSubmit(data: DemoRegistrationData) {
        console.log(data)
    }

    return (
        <>
            <Form {...form}>
                <FormRightSide onSubmit={form.handleSubmit(onSubmit)}>
                    <CustomSlide id="sec-1">
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        First names as on your official documents.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CustomSlide>
                    <CustomSlide id="sec-2">
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Last names as on your official documents.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CustomSlide>
                    <CustomSlide id="sec-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="j.doe@an-email.com" type="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Your email address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CustomSlide>
                    <CustomSlide id="sec-4">
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        A secure and strong password.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </CustomSlide>
                </FormRightSide>
            </Form>
        </>
    )
}