import { NavLink } from "react-router-dom";

export function NavBar() {

    const NavItems = [
        {   route: "/", label: "Home" },
        {   route: "/about", label: "About" },
        {   route: "/projects", label: "Project" },
        {   route: "/contacts", label: "Contact" }
    ]
    
    return (
        <nav className="w-100 bg-accent-foreground p-4 my-8 sticky rounded-r-4xl ">
            <div className="justify-around flex">
                {NavItems.map((item) => (
                    <NavLink to={item.route} key={item.route} className="text-lg font-bold">
                        {item.label}
                    </NavLink>

                ))}
            </div>
        </nav>
    )
}