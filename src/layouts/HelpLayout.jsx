import { NavLink, Outlet } from "react-router-dom"

const HelpLayout = () => {
    return (
        <div className="help-layout">
            <h2>Website Help</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, reprehenderit.</p>
            <nav className="flex justify-center gap-[30px] my-[30px] mx-0">
                <NavLink to="faq">FAQ</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default HelpLayout