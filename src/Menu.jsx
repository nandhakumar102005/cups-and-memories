import Menulist from "./Menulist"
import Menu1 from "./assets/Menu1.jpg"
import Menu2 from "./assets/Menu2.jpg"
import Menu3 from "./assets/Menu3.jpg"
import Menu4 from "./assets/Menu4.jpg"
import Menu5 from "./assets/Menu5.jpg"
import Menu6 from "./assets/Menu6.jpg"
import Menu7 from "./assets/Menu7.jpg"
import Menu8 from "./assets/Menu8.jpg"
import Menu9 from "./assets/Menu9.jpg"
import Menu10 from "./assets/Menu10.jpg"
import Menu11 from "./assets/Menu11.jpg"
import Menu12 from "./assets/Menu12.jpg"
import Navbar from "./Navbar"


import cup from "./assets/Cuplogo.png"
import cappuccino from "./assets/cappuccino2.jpg"
import cake from "./assets/chococake1.jpg"
import sandwich from "./assets/sandwich1.jpg"
import icedlatte from "./assets/icedlatte.jpg"
import Footer from "./Footer"


function Menu() {
    return (
        <>
        <div className="container-xxl menubgcontainer ">
            <Navbar />
            <div className="container-xxl ">
                <div className="row menucontainer">
                    <Menulist img={Menu1} title="Cappuccino" price="150" />
                    <Menulist img={Menu2} title="Esspresso" price="100" />
                    <Menulist img={Menu3} title="Filter Coffee" price="50" />
                    <Menulist img={Menu4} title="Tea" price="40" />
                    <Menulist img={Menu5} title="Iced Latte" price="120" />
                    <Menulist img={Menu7} title="Bubble Tea" price="130" />
                    <Menulist img={Menu6} title="Peri Peri Fries" price="90" />
                    <Menulist img={Menu9} title="Bread Omlet" price="60" />
                    <Menulist img={Menu11} title="Chicken Sandwich" price="120" />
                    <Menulist img={Menu8} title="Mini cupcakes" price="100"  />
                    <Menulist img={Menu12} title="Chocolate Cake" price="100" />
                    <Menulist img={Menu10} title="Valentine Cake" price="300" />

                </div>
            </div>
           
            </div>

            <div>

                  <div className="container" style={{marginTop:"200px"}}>
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
                                
                                  
                
                            </div>

            </div>
            <Footer/>
       
        
            
        </>
    )
}

export default Menu