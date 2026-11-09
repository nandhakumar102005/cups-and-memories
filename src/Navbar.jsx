import cup from "./assets/Cuplogo.png"
import {Link} from "react-router-dom"



function Navbar() {
    return (
        <>
             <div className="navbar navbar-expand-lg">
                <div className="container-xxl ">
                    <a href="" className="navbar-brand p-1 d-flex align-items-center ">
                        <img id="cuplogoimg" src={cup} alt="" />
                        <span className="brandname">Cups&Memories</span>
                    </a>

                    <button className="navbar-toggler" data-bs-target="#links" data-bs-toggle="collapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="links" className="collapse navbar-collapse justify-content-center  p-2  text-center">
                        <ul className="navbar-nav text-align-center " >
                          <Link to={"/"}><li className="nav-item p-2  nav-li">Home</li></Link>
                           <Link to="/About" > <li className="nav-item p-2  nav-li">About Us</li></Link>
                      <Link to={"/Menu"}><li className="nav-item p-2  nav-li">Menu</li></Link> 
                      <Link to={"/TableBooking"}><li className="nav-item p-2  nav-li">Table Booking</li> </Link>   

                     <Link to={"/Contact"}><li className="nav-item p-2  nav-li" id="navconttext">Contact Us</li></Link>  

                        </ul>
                    </div>

                </div>
            </div> 



        </>


    )
}

export default Navbar
