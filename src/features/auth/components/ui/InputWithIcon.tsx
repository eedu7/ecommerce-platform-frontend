import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import React from "react";
import {ControllerRenderProps} from "react-hook-form";
import {Mail, User} from "lucide-react";

interface InputWithIconProps {
    type?: string;
    label?: string;
    placeholder?: string;
    field: ControllerRenderProps<{
        email: string; username: string; password: string, confirmPassword: string
    }>;
}


const InputWithIcon: React.FC<InputWithIconProps> = ({label, type, placeholder, field}) => {
    const Icon = type === "email" ? Mail : User;
    return (<div className="space-y-2">
        {label && (<Label htmlFor={field.name}>{label}</Label>)}
        <div className="relative">
            <Input id={field.name} className="peer pe-9" placeholder={placeholder || ""}
                   type={type || "text"} {...field}/>
            <div
                className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Icon size={16} strokeWidth={2} aria-hidden="true"/>

            </div>
        </div>
    </div>);
}

export default InputWithIcon;