const Contact = () => {
    return (
        <div>
            <h3>Contact Us</h3>
            <form className="mt-[30px]">
                <label>
                    <span>Your email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button className="p-2 rounded uppercase bg-primary cursor-pointer tracking-wider font-semibold">Submit</button>
            </form>
        </div>
    )
}

export default Contact