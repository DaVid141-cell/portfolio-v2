import { NavLink } from "react-router-dom";

export function NavBar() {

    const NavItems = [
        {   route: "/", label: "Home" },
        {   route: "/about", label: "About" },
        {   route: "/projects", label: "Project" },
        {   route: "/contacts", label: "Contact" }
    ]
    
    return (
        <div className="w-100 h-100 ">
            <nav className="p-10">
                <div className="p-10">
                    {NavItems.map((item) => (
                        <NavLink to={item.route} key={item.route}>
                            {item.label}
                        </NavLink>

                    ))}
                </div>
            </nav>
        </div>
    )
}