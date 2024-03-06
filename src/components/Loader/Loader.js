// from:
// https://uiverse.io/mobinkakei/grumpy-turtle-41
// Copyright - 2024 mobinkakei (Mobeen) 
import "./Loader.css";

function Loader(){
    return (
        <div className="loader">
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
            <p className="copyright">Copyright - 2024 mobinkakei (Mobeen)</p>
        </div>
    )
}

export default Loader;
