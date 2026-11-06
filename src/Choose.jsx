import heart from "./assets/heartshape.png"
import atmos from "./assets/atmos.jpg"
import coffeecup from "./assets/coffeecup.jpg"
import Cake from "./assets/Cake.jpg"


function Choose(){
    return(
        <>
        <div className="container text-center">
            
            <div className="chooseus text-center">
           <img id="heartimg" src={heart} alt="" />
           <h3>Why Choose Us?</h3>
           <p id="choosep">we're Passionate about Quality,Comfort and Create Memorable moments for Every Guest</p>
            </div>

            <div className="container text-center  ">
                <div className="row   ">

                    <div className="col  choosecard-row ">
                        <div className="card cardcol text-center">
                            <img className="chooseimg card-img-top" src={coffeecup} alt="" />
                            <div className="card-body">
                                  <h4 className="card-title">Quality Coffee</h4>
                                   <p className="card-text">we Source the finest beans and brew every cup to perfection.</p>

                            </div>
                        </div>
                    </div>

                      <div className="col choosecard-row  ">
                        <div className="card cardcol text-center">
                            <img className="chooseimg card-img-top" src={Cake} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Fresh & Delicious</h4>
                                 <p className="card-text">From pastries to meals ,everything is made fresh daily.</p>

                            </div>
                        </div>
                    </div>

                      <div className="col choosecard-row ">
                        <div className="card cardcol text-center">
                            <img className="chooseimg card-img-top" src={atmos} alt="" />
                            <div className="card-body">
                                  <h4 className="card-title ">Cozy Atmosphere</h4>
                                  <p className="card-text " >A warm and welcome space to relax, work, and catch up.</p>

                            </div>
                        </div>
                    </div>
                    
                
                
                </div>



            </div>
           
        </div>
        
        
        </>
    )
}

export default Choose