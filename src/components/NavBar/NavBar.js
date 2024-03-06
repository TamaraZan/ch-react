import CartWidget from "../CartWidget/CartWidget";
import LogoImg from "../../assets/logo.png"
import { Link } from "react-router-dom";

import "./NavBar.css"


function NavBar() {
    let nombreMarca = "NextMarket";
    
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={LogoImg} alt="Logo" width="30" className="d-inline-block align-text-top"/>
                    {nombreMarca}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/notebooks">Notebooks</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/cellphones">Celulares</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/category/tablets">Tablets</Link>
                        </li>
                    </ul>
                    <CartWidget/>
                </div>
            </div>
            </nav>
        </header>
    );
  }
  
  export default NavBar;