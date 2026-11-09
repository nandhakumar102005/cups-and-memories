import Navbar from "./Navbar"
import Choose from "./Choose"
import Highlights from "./Highlights"
import Visitus from "./Visitus"
import {Link} from "react-router-dom"
import Footer from "./Footer"



function Home() {
    return (
        <>

            <div className="container-xlg">
                <div className="homecont navbar-nav">
                    {<Navbar />}
                     <h1 id="wel">Welcome to Our Cafe</h1> 

                    <h1 id="createtit"> Create Memories with a Cup of Coffee</h1>
                    <div id="btncont">
                    <Link to={"/Menu"}><button id="vbtn">Visit</button></Link> 
                <Link to={"/TableBooking"}>    <button id="tbtn">Book Tables</button></Link>

                    </div>
                    


                </div>


            </div>
            <Choose/>
            <Highlights/>
            <Visitus/>
            <Footer/>
            



        </>
    )
}

export default Home
