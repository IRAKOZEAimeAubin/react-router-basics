import { Form, redirect, useActionData } from "react-router-dom";

const Contact = () => {
    const data = useActionData()
    
    return (
        <div>
            <h3>Contact Us</h3>
            <Form className="mt-[30px]" method="post" action="/help/contact">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button className="p-2 rounded uppercase bg-primary cursor-pointer tracking-wider font-semibold">Submit</button>

                { data && data.error && <p>{ data.error }</p> }
            </Form>
        </div>
    )
}

export const contactAction = async ( { request } ) => {
    console.log( request )

    const data = await request.formData()
    
    const submission = {
        email: data.get( "email" ),
        message: data.get( "message" )
    }

    if ( submission.message.length < 10 ) {
        return {
            error: "Message must be at least 10 chars long"
        }
    }

    console.log( submission )

    return redirect( "/" )
}

export default Contact