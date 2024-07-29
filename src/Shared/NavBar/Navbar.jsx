import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";



const Navbar = () => {
  
  const {user,SignOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    SignOut()
    .then(()=>{
      alert("Logout SucessFully");
    })
    .catch(error=>{
      console.log(error);
    })

  }
    const NavBar=<>
    <Link to='/'>  <li><a>Item 1</a></li></Link>
    <Link to='/'>  <li><a>Home</a></li></Link>
    {
      user?.email?  <>
<li><button onClick={handleLogOut}><a>LogOut</a></button></li>
<Link to='/bookings'>  <li><a>Bookings</a></li></Link>
      
      </>
      
      :<Link to='/login'>  <li><a>Login</a></li></Link>
    }
    <Link to='/signup'>  <li><a>Signup</a></li></Link>
    
    </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {NavBar}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {NavBar}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;