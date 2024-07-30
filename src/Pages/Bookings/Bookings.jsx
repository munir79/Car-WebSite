import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";


const Bookings = () => {
    const {user}=useContext(AuthContext);
    const [book,setBook]=useState([]);
    const uri=`http://localhost:5000/bookings?email/${user?.email}`
   useEffect(()=>{
    fetch(uri)
    .then(res=>res.json())
    .then(data=>setBook(data));
   } ,[uri])


   const handleDelete=id=>{
    Swal.fire({
        title: "Are you sure Delete ?",
      
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          console.log("id",id);
          fetch(`http://localhost:5000/bookings/${id}`,{
            method:'DELETE'
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });

            }
            const remainnaing=book.filter(del=>del._id !=id);
            setBook(remainnaing);
          })

      
        }
      });
}

const handleBookingsConfirm=id=>{
  fetch(`http://localhost:5000/bookings/${id}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json'
    },
    body:JSON.stringify({status:'confirm'})
    
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    if(data.modifiedCount>0){
      const remaining=book.filter(book=>book._id!==id);
      const updated=book.filter(book=>book._id ===id);
      updated.status="confirm";
      const newBooking=[updated,...remaining];
      setBook(newBooking);

    }
  })

}


    return (
        <div>
            <h2> Total Bookings:{book.length} </h2>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Service</th>
        <th>Name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     
     {
        book.map(book=><BookingsRow  key={book._id} handleBookingsConfirm={handleBookingsConfirm} handleDelete={handleDelete} book={book} ></BookingsRow> )
     }
      

    </tbody>

   
  </table>
</div>
        </div>
    );
};

export default Bookings;