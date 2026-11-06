import instagram from "./assets/instagram.png"
import facebook from "./assets/facebook.png"
import twitter from "./assets/twitter.png"
function Footer() {
    return (
        <>

            <div className="container fcont text-center ">
                <h1>Follow us</h1>
                <div className=" followus ">

                    <div className="fcol">
                        <img src={instagram} alt="" className="img-fluid fusimg" />
                    </div>



                    <div className="fcol">
                        <img src={facebook} alt="" className="img-fluid fusimg" />
                    </div>



                    <div className="fcol">
                        <img src={twitter} alt="" className="img-fluid fusimg" />
                    </div>

                </div>

            </div>

            <div className="container text-center mt-5">
                <p>2026 Cups&Memories. All Rights Reserved.</p>
            </div>


        </>
    )
}

export default Footer