import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const CheeckOut = () => {

    const service = useLoaderData();
    const {user}=useContext(AuthContext);
    const { title,price,_id,img } = service;
    const handlebookservice=event=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const date=form.date.value;
        const email=user?.email;

        const order={
            customerName:name,
            email,
            date,
            img,
            service:title,
            service_id:_id,
            price
        }
        console.log(order);
       fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(order)

       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert("your order sucessfully");
        }
       })

    }
    return (
        <div className="">
            <h2 className="text-center"> This is CheekOut :{title} </h2>

            <form onSubmit={handlebookservice} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">

                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <input type="date"  name="date" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">

                        <input type="number" defaultValue={price} className="input input-bordered" required />

                    </div>






                </div>
                <div className="form-control   mt-6">

                    <input type="text" placeholder="your message" className="input input-bordered h-[250px]" required />

                </div>
                <div className="form-control w-full mt-6">
                  
                    <button className="btn btn-primary" type="submit">Order Confirm</button>
                </div>
            </form>

        </div>
    );
};

export default CheeckOut;