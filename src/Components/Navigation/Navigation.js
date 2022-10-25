import { NavLink,Outlet } from "react-router-dom";
const Navigation =()=>{
    return(
        <div>
        <div className="navigation">
            <NavLink end to="/">Home</NavLink>
            <NavLink to="/categories">Categories</NavLink>
            <NavLink to="/categories/hats">Hats</NavLink>
            <NavLink to="/categories/jackets">Jackets</NavLink>

        </div></div>
    )
}
export default Navigation