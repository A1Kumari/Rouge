import React from 'react';
import img5 from "../img/gifs (5).svg";
import './styles/Login.css';

const LoginPage = () => {
    return (
        <div className="login-container py-5">
           <div className="row justify-content-center">
                <div className="col-md-6">
                    <img src={img5} className='login-img'/>
                    <form>
                    <h2 className="text-center mb-2">Login</h2>
            <p className="text-center tagline">~ Welcome Back! Please login to continue.</p>
            
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <button type="submit" className="btn btn-custom w-100">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
