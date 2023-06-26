import { NavLink, Outlet } from "react-router-dom"
import BreadCrumbs from "../components/BreadCrumbs";


const RootLayout = () => {
    return (
        <div>
            <header>
                <nav className="flex gap-4 justify-end max-w-[1200px] my-0 mx-auto">
                    <h1 className="mr-auto border-b-primary border-b-[3px] text-lg font-bold tracking-widest">JobaRouter</h1>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="careers">Careers</NavLink>
                    <NavLink to="help">Help</NavLink>
                </nav>
                <BreadCrumbs />
            </header>
            <main className="max-w-[1200px] my-10 mx-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout