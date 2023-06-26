import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
    const error = useRouteError()
    
    return (
        <div>
            <h2 className="font-bold text-xl tracking-wide mb-2">Error</h2>
            <p className="font-medium bg-[#00000033] p-1 rounded inline-block mb-2">{ error.message }</p><br />
            <Link className="tracking-widest font-semibold border-b-primary border-b-[2px]" to="/">Take Me Home</Link>
        </div>
    )
}

export default CareersError