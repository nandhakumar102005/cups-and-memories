import { Link } from "react-router-dom"
import visit1 from "./assets/Visit1.jpg"
import visit2 from "./assets/Visit2.jpg"
import visit3 from "./assets/Visit3.jpg"


function Visitus() {
    return (
        <>

    


            <div className="container visitcont">
                <div className="row">
                    <div className="col-lg-6 cpl-md-12 mb-4 mb-lg-0">
                        <h1 className="visith1">Visit Us Today</h1>
                        <p className="visitp"> We'd love to welcome you to our cafe. <br />
                            Come for the coffee, stay free for the good vibes!</p>
                      <Link to={"/contact"}><button className="locbtn">FIND OUR LOCATION</button></Link> 

                    </div>

                    <div className="col-lg-6 col-md-12 ">
                        <div className="row">
                            <div className="col-4">
                                <img src={visit1} alt=""  className="img-fluid visitcardimg"/>
                            </div>
                            <div className="col-4">
                                <img src={visit2} alt="" className="img-fluid visitcardimg" />
                            </div>
                            <div className="col-4">
                                <img src={visit3} alt="" className="img-fluid visitcardimg" />
                            </div>
                        </div>
                    </div>
                </div>



                   
                    
                    

            </div>


          

        </>
    )
}

export default Visitus