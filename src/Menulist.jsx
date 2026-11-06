import Footer from "./Footer"

function Menulist(props){
    return(
        <>
       
         
                <div className=" col-6  col-md-4 col-lg-3  mb-4 menucont  ">
                    <div className="card menucard ">
                        <img src={props.img} alt="" className="card-img-top menucardimg" />
                  
                      </div>
                </div>
                
            
        
        
        </>
    )

}

export default Menulist