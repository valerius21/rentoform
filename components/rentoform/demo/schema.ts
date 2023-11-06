import { email, object, type Output, string, minLength, maxLength, toTrimmed, getPipeIssues, getOutput, } from 'valibot'

export const DemoRegistrationSchema = object({
    firstName: string([
        minLength(2, 'Please provide a longer first name'),
        maxLength(20, 'Please provide a shorter first name')
    ]),
    lastName: string([
        minLength(2, 'Please provide a longer last name'),
        maxLength(20, 'Please provide a shorter last name')
    ]),
    email: string([
        toTrimmed(),
        email('Please provide a valid email address'),
        maxLength(64, 'Please provide a shorter email address, with at most 64 characters'),
        // exclude the "+" character from email addresses, because we want only one email address per user
        (input) => {
            if (input.includes('+')) {
                return getPipeIssues('custom', 'Please do not use the "+" character in your email address', input)
            }
            return getOutput(input)
        }
    ]),
    password: string([
        minLength(8, 'Please provide a longer password, with at least 8 characters'),
        maxLength(32, 'Please provide a shorter password, with at most 32 characters')
    ]),
})

export type DemoRegistrationData = Output<typeof DemoRegistrationSchema>
