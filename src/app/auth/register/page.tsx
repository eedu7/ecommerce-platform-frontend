import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import RegisterForm from "@/features/auth/components/RegisterForm";
import SocialLogins from "@/features/auth/components/SocialLogins";
import {Separator} from "@/components/ui/separator";

const Page = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Sign Up
                </CardTitle>
                <CardDescription>Welcome, sign up to continue your shopping!</CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm/>
            </CardContent>
            <div className="flex justify-center mb-4">

            <Separator className="w-48" />
            </div>
            <CardFooter className="flex justify-center">
                <SocialLogins />
            </CardFooter>
        </Card>
    )
}
export default Page
