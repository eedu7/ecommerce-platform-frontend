import React from 'react'

const TermsAndServiceParagraph = () => {
    return (
        <p className="text-muted-foreground text-sm">
            By clicking Register or Continue with Google, Facebook, or Apple, you agree to Etsy <span
            className="underline text-blue-400">Terms of User</span> and <span
            className="underline text-blue-400">Privacy Policy</span>
        </p>
    )
}
export default TermsAndServiceParagraph



export const AdditionalInfo = () => {
    return (
        <p className="text-xs text-muted-foreground">Etsy may send you communications; you may change your preferences in your account settings. We'll never post without your permission.</p>
    )
}
