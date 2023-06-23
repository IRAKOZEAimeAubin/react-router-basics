import { useLoaderData } from "react-router-dom"

const CareerDetails = () => {
    const career = useLoaderData()
    
    return (
        <div className="bg-[#00000033] p-5 rounded my-5 mx-0">
            <h2 className="font-bold">Career details for { career.title }</h2>
            <p>Starting salary: { career.salary }</p>
            <p>Location: { career.location }</p>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti vero vitae iusto pariatur saepe mollitia, non quae vel. Aliquam optio omnis ipsum explicabo aspernatur repudiandae provident quod dolores reprehenderit facilis?</p>
            </div>
        </div>
    )
}

export const careerDetailsLoader = async ( { params } ) => {
    const { id } = params
    
    const res = await fetch( `http://localhost:3000/careers/${ id }` )
    
    return res.json()
}

export default CareerDetails