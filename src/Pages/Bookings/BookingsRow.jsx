


const BookingsRow = ({book,handleDelete,handleBookingsConfirm}) => {
    const {customerName,price,email,img ,service,_id,status}=book;
    
 
    return (
        <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service} </div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {customerName}
          <br />
          <span className="badge badge-ghost badge-sm">{email} </span>
        </td>
        <td>{price} </td>
        <th>
          { status==="confirm" ?<span className="font-bold text-blue-500">confirm </span>:
            <button onClick={()=>handleBookingsConfirm(_id)} className="btn btn-ghost btn-xs">please  Confirm</button>
          }
        </th>
      </tr>
    );
};

export default BookingsRow;