import { Link, Outlet } from "react-router-dom";

export default function Services() {
    return (
        <div>
            <h2>Services</h2>
            <nav>
                <Link to="/services/developement">Developement</Link>
                <Link to="/services/marketing">Marketing</Link>
            </nav>
            <Outlet />
        </div>
    );
}
