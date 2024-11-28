import {Button} from "@/components/ui/button";
import {RiFacebookFill, RiGithubFill, RiGoogleFill, RiTwitterXFill} from "@remixicon/react";

export default function SocialMediaLogins() {
    return (<div className="flex flex-col gap-2">
            <Button variant="outline" disabled>
                <RiGoogleFill
                    className="me-3 text-[#DB4437] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                Continue with Google
            </Button>
            <Button variant="outline" disabled>
                <RiTwitterXFill
                    className="me-3 text-[#14171a] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                Continue with X
            </Button>
            <Button variant="outline" disabled>
                <RiFacebookFill
                    className="me-3 text-[#1877f2] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                Continue with Facebook
            </Button>
            <Button variant="outline" disabled>
                <RiGithubFill
                    className="me-3 text-[#333333] dark:text-white/60"
                    size={16}
                    aria-hidden="true"
                />
                Continue with GitHub
            </Button>
        </div>);
}
