import { Outlet } from "react-router-dom";

const Layout = () => {
    return <div>
        <nav>
            <ul>
                <Link to = "/concentrece-game">Concentrece game</Link>
            </ul>
        </nav>
        <hr/>
        <Outlet/>
    </div>;
}