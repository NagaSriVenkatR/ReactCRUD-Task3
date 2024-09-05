import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLockOutline  } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import "./form.css"
function Form() {
  return (
    <div style={{ backgroundColor: "#C0DBB4 !important" }}>
      <div className="sign-up">
        <div className="container">
          <div className="signup-context row">
            <div className="col-md-8">
              <div className="signup-form">
                <h2 className="form-title">Sign Up</h2>
                <form action="" method="post" className="register-form">
                  <div className="form-group">
                    <label htmlFor="">
                      <FaUser />
                    </label>
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      <MdEmail />
                    </label>
                    <input type="email" placeholder="Your Email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      <IoMdLock />
                    </label>
                    <input type="password" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="">
                      <MdLockOutline />
                    </label>
                    <input type="password" placeholder='Repeat your password' />
                  </div>
                  <div className="form-group">
                    <input type="checkbox"  />
                    <label htmlFor="" className='label-agree-term'>
                      <span><span></span></span>
                      I agree all statements in <a className='term-service' href="./">Term of service</a>
                    </label>
                  </div>
                  <div className="form-group"></div>
                </form>
              </div>
              <div className="signup-image"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
