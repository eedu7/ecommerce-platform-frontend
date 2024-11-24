import {Input} from "@/components/ui/input";
import {IconNode} from "lucide-react";

interface InputIconProps {
    inputType: string;
    placeholder: string;
    // @ts-ignore
    Icon: typeof IconNode;
    field: any;
}

export default function InputIcon({inputType, placeholder, Icon, field}: InputIconProps) {
    return (<div className="space-y-2">
        <div className="relative">
            <Input id="input-09" className="peer ps-9" placeholder={placeholder} type={inputType} {...field} />
            <div
                className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                <Icon size={16} strokeWidth={2} aria-hidden="true"/>
            </div>
        </div>
    </div>);
}
