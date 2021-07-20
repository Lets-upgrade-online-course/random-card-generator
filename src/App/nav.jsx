const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white bg-dark p-1" style={{ display: "flex", justifyContent: "space-arround" }}>
            <a className="navbar-brand text-success" href="#">Random card Generater</a>

            <div className="collapse navbar-collapse m-2 ml-5" style={{ display: "flex", justifyContent: "space-between" }}>
                <ul className="navbar-nav d-flex" style={{ display: "flex", justifyContent: "space-between" }}>
                    <li className="nav-item active">
                        <a className="nav-link text-white" href="#">Home </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link text-white">
                            Products
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Meeting</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavBar;