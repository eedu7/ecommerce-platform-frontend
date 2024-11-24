import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import SocialLogins from "@/features/auth/components/SocialLogins";
import {Separator} from "@/components/ui/separator";
import LoginForm from "@/features/auth/components/LoginForm";

const Page = () => {
    return (
        <Card className="bg-gray-50">
            <CardHeader>
                <CardTitle>
                    Sign In
                </CardTitle>
                <CardDescription>Welcome back, continue where you left!</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm/>
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
