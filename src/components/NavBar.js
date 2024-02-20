import CartWidget from "./CartWidget";
import LogoImg from "./logo.png"

function NavBar() {
    let nombreMarca = "NextMarket";
    
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={LogoImg} alt="Logo" width="30" className="d-inline-block align-text-top"/>
                    {nombreMarca}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                        <li className="nav-item">
                        <a className="nav-link" href="#">Notebooks</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Celulares</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Tablets</a>
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