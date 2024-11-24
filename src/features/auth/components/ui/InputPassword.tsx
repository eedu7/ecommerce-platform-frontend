"use client";

import React from "react";
import {Input} from "@/components/ui/input";
import {Eye, EyeOff} from "lucide-react";

interface InputPasswordProps {
    isVisible: boolean;
    showButton?: boolean;
    setIsVisible: (value: boolean) => void;
    field: any;
}

export default function InputPassword({
                                          field, isVisible, setIsVisible, showButton = true,
                                      }: InputPasswordProps) {
    const toggleVisibility = () => setIsVisible(!isVisible);

    return (<div className="space-y-2">
            <div className="relative">
                <Input
                    id="confirm-password"
                    className="pe-9"
                    placeholder="Password"
                    type={isVisible ? "text" : "password"}
                    {...field}
                />
                {showButton && (<button
                        className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-colors hover:text-foreground focus:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label={isVisible ? "Hide password" : "Show password"}
                        aria-pressed={isVisible}
                    >
                        {isVisible ? (<EyeOff size={16} strokeWidth={2} aria-hidden="true"/>) : (
                            <Eye size={16} strokeWidth={2} aria-hidden="true"/>)}
                    </button>)}
            </div>
        </div>);
}
