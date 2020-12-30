import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { accountService } from '../helpers';

function Login() {
  
  return (
    <>
      <Header />
      <div>
        <div>TWITTER Login</div>
        <div>GOOGLE Login</div>
        <div>
          <button className="btn btn-facebook"
          onClick={accountService.fblogin}
          >
            <i className="fa fa-facebook mr-1"></i>
            Login with Facebook
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;