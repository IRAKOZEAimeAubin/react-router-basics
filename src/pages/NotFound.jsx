import { Link } from "react-router-dom"


const NotFound = () => {
    return (
        <div className="flex flex-col items-center gap-4">
            <span className="font-bebas text-9xl tracking-widest">404</span>
            <span className="text-xl font-medium tracking-wide">Oops looks like you are lost🚀...</span>
            <Link to="/" className="bg-primary font-bold tracking-widest uppercase p-2 rounded">Back Home</Link>
        </div>
    )
}

export default NotFound