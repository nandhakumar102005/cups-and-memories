import location from"./assets/gps.png"
import mail from "./assets/email.png"
import phone from "./assets/phone-call.png"
import Navbar from "./Navbar"
import Footer from "./Footer"

function Contact(){
    return(
        <>
        <Navbar/>
         {/* <h1 style={{marginTop:"130px",textAlign:"center"}}>Contact Us</h1> */}
        <div className="container-xxl maincontainer" style={{marginTop:"120px"}} >

           
            
            <div className="container-xxl continfo mt-4"  >
                <h1 style={{textDecoration:"underline"}}>Contact Information</h1>
                <p>Hello! Let's get in touch</p>
                <div className="logos">
                    <div className="gps d-flex align-item-center gap-2">
                         <img src={location} alt="" className="clogos"/>
                         <p className="mt-2  "> 3rd-Main road Madhavarm,Chennai</p>
                    </div>

                    <div className="email d-flex align-item-center gap-2 mt-3">
                        <img src={mail} alt=""   className="clogos"/>
                        <p className="mt-2 ">cups&memories@gmail.com</p>
                    </div>

                    <div className="phone d-flex align-item-center gap-2 mt-3">
                        <img src={phone} alt=""  className="clogos" />
                        <p  className="mt-2">+91 8925762992</p>
                    </div>
                
                </div>
            </div>


            <div className="container mapmaincont" >
                <h3 className="findus">Find Us..?</h3>
                <h1 className="findus" style={{textDecoration:"underline"}}>Location</h1>
                <div className="container mapcont mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.9924273588504!2d80.25129087405388!3d13.16287731065827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526537e8635d0f%3A0xadff1858301275bd!2sSeeyalan%201st%20Cross%20St%2C%20Manali%2C%20Chennai%2C%20Tamil%20Nadu%20600051!5e0!3m2!1sen!2sin!4v1793890977432!5m2!1sen!2sin" 
                    width="100%" height="250" 
                    style={{border:"0", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"strict-origin-when-cross-origin",borderRadius:"10px"}}>

                    </iframe>
         


                </div>


            </div>


           


        </div>

        <Footer/>
        
        </>
    )
}

export default Contact