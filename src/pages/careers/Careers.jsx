import { Link, useLoaderData } from "react-router-dom";

const Careers = () => {
    const careers = useLoaderData()
    
    return (
        <div className="careers">
            { careers.map( career => (
                <Link to={ String( career.id ) } key={ career.id }>
                    <p className="font-semibold">{ career.title }</p>
                    <p className="font-medium">{ career.location }</p>
                </Link>
            ))}
        </div>
    )
}

export const careersLoader = async () => {
    const res = await fetch( "http://localhost:3000/careers" )
    
    return res.json()
}

export default Careers