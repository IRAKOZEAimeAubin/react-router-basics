import { useState } from 'react'
import { Navigate } from 'react-router-dom';

const About = () => {
    const [ user, setUser ] = useState( "dash" )
    
    if ( !user ) {
        return <Navigate to="/" replace={ true } />
    }

    return (
        <div>
            <h2>About Us</h2>
            <p className="my-5 mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
            <p className="my-5 mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
            <p className="my-5 mx-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis quia illum officia obcaecati provident nulla odio molestiae suscipit quasi.</p>
            <button onClick={ () => setUser( null ) } className="p-2 rounded uppercase bg-primary cursor-pointer tracking-wider font-semibold">Logout</button>
        </div>
    )
}

export default About