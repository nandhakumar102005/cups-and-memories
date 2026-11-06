import Menu from "./Menu"
import { Link } from "react-router-dom"
import cup from "./assets/Cuplogo.png"
import cappuccino from "./assets/cappuccino2.jpg"
import cake from "./assets/chococake1.jpg"
import sandwich from "./assets/sandwich1.jpg"
import icedlatte from "./assets/icedlatte.jpg"

function Highlights(){
    return(
        <>
        <div className="container">
            <div className="imgconntainer text-center m-5">
                <img src={cup} id="H-heartimg" alt="" />
                <h3>Our Menu Highlights</h3>
                <p>Handcrafted with Love, and made for You</p>
            </div>



        
                 <div className="row">

                    <div className="col highcol text-center ">
                        <div className="card highmenucard">
                            <img src={cappuccino} className="highmenucardimg card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title ">
                                    Cappuccino
                                </h4>
                            </div>
                        </div>
                    </div>


                        
                     <div className="col highcol text-center">
                        <div className="card highmenucard">
                            <img src={cake} className="highmenucardimg  card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Chocolate Cake
                                </h4>
                            </div>
                        </div>
                    </div>


                     <div className="col highcol text-center">
                        <div className="card highmenucard">
                            <img src={sandwich} className="highmenucardimg  card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Chicken Sandwich
                                </h4>
                            </div>
                        </div>
                    </div>


                     <div className="col  highcol text-center">
                        <div className="card highmenucard">
                            <img src={icedlatte} className="highmenucardimg  card-img-top" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">
                                    Iced Latte
                                </h4>
                            </div>
                        </div>
                    </div>

                  


                </div>
                <div style={{display:"flex", alignItems:"center",justifyContent:"center", marginTop:"20px"}}>
                  <Link to={"/Menu"}>  <button className="view-fm-btn">VIEW FULL MENU</button></Link>
                </div>
                  

            </div>
           

        
        </>


    )
}

export default Highlights