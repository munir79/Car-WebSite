import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [book,setBook]=useState([]);
    const uri=`http://localhost:5000/bookings?email/${user?.email}`
   useEffect(()=>{
    fetch(uri)
    .then(res=>res.json())
    .then(data=>setBook(data));
   } ,[])
    return (
        <div>
            <h2> Total Bookings:{book.length} </h2>
        </div>
    );
};

export default Bookings;