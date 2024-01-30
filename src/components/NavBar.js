import CartWidget from "./CartWidget";
import LogoImg from "./logo.png"

function NavBar() {
    let nombreMarca = "NextMarket";
    
    return (
        <header>
            <nav class="navbar navbar-expand-sm">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={LogoImg} alt="Logo" width="30" class="d-inline-block align-text-top"/>
                    {nombreMarca}
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-sm-0">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Notebooks</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Celulares</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Tablets</a>
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