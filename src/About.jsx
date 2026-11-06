import Navbar from "./Navbar"
import location from "./assets/gps.png"
import time from "./assets/clock.png"
import phone from "./assets/phone-call.png"
import bg from "./assets/Ai.jpeg"
import bg2 from "./assets/CafeBg.jpg"
import Footer from "./Footer"

function About() {
    return (
        <>

            <div className="container-xxl Aboutmaincont">
                <Navbar />

                <div className="Alogos  " style={{ marginTop: "150px" }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={location} alt="" className="Aimg" />
                        <div className="textdiv">
                            <h4>Locate Us</h4>
                            <p>3rd-Main road Madhavarm,Chennai</p>
                        </div>

                    </div>

                    <div className=" d-flex justify-content-center align-items-center">
                        <img src={time} alt="" className="Aimg" />
                        <div className="textdiv" >
                            <h4>Open Hours</h4>
                            <p>Everyday, 11 AM - 1 AM</p>
                        </div>

                    </div>

                    <div className="d-flex justify-content-center align-items-center">
                        <img src={phone} alt="" className="Aimg" />
                        <div className="textdiv" >
                            <h4>Reservation</h4>
                            <p>+91 8925762992</p>
                        </div>

                    </div>
                </div>





                <div className="container mainstory" >
                    <img src={bg2} alt="" className="storyimg" />
                    <div>


                        <h1 className="storyh1">Our Story</h1>
                        <p className="storyp">Welcome to Cups & Memories, a cozy corner where every cup tells a story and every moment turns into a cherished memory.
                            Founded with a deep love for fine coffee and warm community connections, our doors opened to create a peaceful escape from the busy city.
                            We wanted a space where friends can gather, ideas can bloom, and anyone can enjoy a moment of pure relaxation.
                            From our freshly roasted beans to our welcoming atmosphere, everything we do is crafted with passion.
                            Step inside, grab your favorite brew, and make yourself at home with us!</p>
                    </div>

                </div>


                <Footer/>

            </div>

        </>
    )
}

export default About