import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
    const [service,setService]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center space-y-2">
                <h1 className="text-xl text-[#FF3811]">Service </h1>
                <h1 className="text-4xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
             <div className="grid lg:grid-cols-3 gap-4">
                {service.map(service=> <ServiceCard service={service} key={service._id}></ServiceCard>)}
             </div>
        </div>
    );
};

export default Service;