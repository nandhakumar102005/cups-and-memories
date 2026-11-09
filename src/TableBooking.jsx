import Footer from "./Footer"
import Navbar from "./Navbar"
import { useState } from "react"



function TableBooking(){

        const[formData,setFormData] = useState({
        name:"",
        number:"",
        email:"",
        guests:"",
        date:""
    })

    const[showPopup,setShowPopup]=useState(false);


const Handlechange = (e) =>{
    setFormData({
        ...formData,[e.target.name]:e.target.value
    })

}



const Handlesubmit =(e)=>{
    e.preventDefault();

    if (!formData.name || !formData.number || !formData.email || !formData.guests || !formData.date) {
            alert("Please fill in all the details before booking!");
            return;
        }

        setShowPopup(true);
    
         };

         const closePopup=()=>{
            setShowPopup(false);


             setFormData({
            name: "",
            number: "",
            email: "",
            guests: "",
            date: ""
        });
         }
       
  




    return(
        <>

        
        <div className="container-l tbcont">
            <Navbar/>
        

                  <form onSubmit={Handlesubmit} className="tbform" >
                    <h1 className="tbh1">Reserve Your Table..</h1>
                <input type="text"  placeholder="Enter your Name" name="name" value={formData.name} onChange={Handlechange} required/>
                <input type="text" placeholder="Enter your  Phone Number" name="number" value={formData.number} onChange={Handlechange} required />
                <input type="text" placeholder="Enter your E-mail ID" name="email" value={formData.email} onChange={Handlechange} required />
                <select  id="" name="persons" value={formData.persons} onChange={Handlechange}>
                    <option className="tboption" value="">Number of Guests?</option>
                    <option className="tboption" value="2">2</option>
                    <option className="tboption" value="4">4</option>
                    <option className="tboption" value="6">6</option>
                    <option className="tboption" value="8">8</option>
                    <option className="tboption" value="10">10</option>
                </select>
                <input placeholder="Select Date and Time" id="tbdate" type="text" 
                onFocus={(e)=>e.target.type="datetime-local"} onBlur={(e)=>{if(!e.target.value)e.target.type="text"}}
                name="date" value={formData.date} onChange={Handlechange}  />

                <button type="submit" className="bnbtn">Book Now</button>

            </form>
                
                </div> 


                {showPopup &&(
                    <div className="popup-overlay">
                        <div className="popup-card">
                            <h2>Table Booked Sucessfully!</h2>
                            <div className="popup-details">
                                <p><strong>Name:</strong>{formData.name}</p>
                                 <p><strong>Phone:</strong>{formData.number}</p>
                                  <p><strong>Email:</strong>{formData.email}</p>
                                   <p><strong>Number of Guests:</strong>{formData.guests}</p>
                                    <p><strong>Date & Time:</strong>{formData.date}</p>
                            </div>
                            <button className="close-btn" onClick={closePopup}>Close</button>
                        </div>
                    </div>
                )}     
                   

        
               

    
            
        <Footer/>
        
        </>

    )
}


export default TableBooking













