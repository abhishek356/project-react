import { Button, Card } from "@/components/ui"
import { Link } from "react-router-dom"

const NotFoundPage = () =>{

    return (
        <div className = 'container flex w-screen h-screen items-center justify-center py-4 text-center'>
           <Card className = 'p-8'>
            <h1>
                Page not found
            </h1>
            <p className = 'pb-2'>
                Unfortunately the page you are looking for does not exist.
            </p>
            <Button asChild>
                <Link to ='/' replace>
                Back to home.</Link>
            </Button>
            </Card>
        </div>
    )
}

export default NotFoundPage;