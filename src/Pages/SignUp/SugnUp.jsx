import { useContext } from 'react';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProvider';
const SugnUp = () => {
    const {CreateUser}=useContext(AuthContext);
    const handleSignUp=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        CreateUser(email,password)
        .then(result=>{
            const user=result.user;
            alert("user created SUcessFully");
            form.reset('');
            console.log(user);
        })
        .catch(error=>{
            console.log(error);
        })
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
        
          < img src={login} alt="" />
          </div>
          <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 ">
          <h2 className='text-3xl font-bold text-center'> SignUp </h2>

            <form onSubmit={handleSignUp}  className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
              <button className='className="btn btn-primary"' type="submit">SignUp </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SugnUp;