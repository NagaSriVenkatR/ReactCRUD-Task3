import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser } from "react-icons/fa";
import { MdEmail, MdLockOutline  } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import SIGN from "./signup-image.jpg"
import "./form.css"
import { useNavigate } from 'react-router-dom';
function Form({ users, setUsers, setSelectedUser, selectedUser }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (selectedUser) {
      setFormData(selectedUser);
    } 
  }, [selectedUser]);
  // useEffect(() => {
  //   localStorage.setItem("formData", JSON.stringify(formData));
  // }, [formData]);
  const handleBlur = (event) => {
    const { name, value } = event.target;
    let validateErrors = { ...errors };
    if (!value) {
      validateErrors[name] = `${
        name.charAt(0).toUpperCase() + name.slice(1)
      } is required `;
    } else {
      validateErrors[name] = "";
    }
    setErrors(validateErrors);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  let emailPattern =
    /^([a-zA-Z0-9]+)@([a-zA-Z0-9-]+).([a-zA-Z]+).([a-zA-Z]{2,20})$/;
  let upperCasePattern = /[A-Z]/;
  let lowerCasePattern = /[a-z]/;
  let numberPattern = /[0-9]/;
  let specialCharacterPattern = /[~!@#%&()$^_?]/;
  let minlengthCharacterPattern = /^.{8,16}$/;
  const validateForm = () => {
    let valid = true;
    let newErrors = [];
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
      valid = false;
    } else {
      newErrors.fullName = " ";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else {
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Enter valid email";
        valid = false;
      } else {
        newErrors.email = " ";
      }
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else {
      if (!minlengthCharacterPattern.test(formData.password)) {
        newErrors.password = "password must be between 8 to 16 characters";
        valid = false;
      } else if (!lowerCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 lowercase character";
        valid = false;
      } else if (!numberPattern.test(formData.password)) {
        newErrors.password = "At least 1 number";
        valid = false;
      } else if (!specialCharacterPattern.test(formData.password)) {
        newErrors.password = "At least 1 special character";
        valid = false;
      } else if (!upperCasePattern.test(formData.password)) {
        newErrors.password = "At least 1 uppercase character";
        valid = false;
      } else {
        newErrors.password = " ";
      }
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword =
        "Check your confirm password and password should be same";
      valid = false;
    } else {
      newErrors.confirmPassword = "";
    }
    setErrors(newErrors);
    return valid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      //  const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
       if (selectedUser) {
         // Update existing user
         const updatedUsers = users.map((user) =>
           user.email === selectedUser.email ? formData : user
         );
         setUsers(updatedUsers);
         localStorage.setItem("users", JSON.stringify(updatedUsers));
       } else {
         // Add new user
         const updatedUsers = [...users, formData];
         setUsers(updatedUsers);
         localStorage.setItem("users", JSON.stringify(updatedUsers));
       }
       setFormData({
         fullName: "",
         phoneNumber: "",
         email: "",
         userName: "",
         password: "",
         confirmPassword: "",
       });
       setErrors({
         fullName: "",
         phoneNumber: "",
         email: "",
         userName: "",
         password: "",
         confirmPassword: "",
       });
       setSelectedUser(null);
       navigate("/users");
    }
  };
  const handleReset = () => {
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({
        fullName: "",
        phoneNumber: "",
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
      });
    };
  return (
    <div style={{ backgroundColor: "#f8f8f8 !important" }}>
      <div className="container">
        <div className="signup-context row justify-content-center mx-auto">
          <div className="col-md col-lg-10  col-xxl-8 d-lg-flex child">
            <div className="signup-form col-md-6">
              <h2 className="form-title">Sign Up</h2>
              <form
                action=""
                method="post"
                className="register-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <label htmlFor="">
                    <FaUser />
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger text-start">
                    {errors.fullName}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <MdEmail />
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger text-start">{errors.email}</span>
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <IoMdLock />
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger text-start">
                    {errors.password}
                  </span>
                </div>
                <div className="form-group">
                  <label htmlFor="">
                    <MdLockOutline />
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Repeat your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-danger text-start">
                    {errors.confirmPassword}
                  </span>
                </div>
                <div className="form-group my-3">
                  <input type="checkbox" className="agree-term" />
                  <label htmlFor="" className="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a className="term-service" href="./">
                      Term of service
                    </a>
                  </label>
                </div>
                <div className="form-group form-button text-start  d-flex">
                  <button
                    className="form-submit btn btn-primary me-3"
                    type="submit"
                    value="Register"
                  >
                    {selectedUser ? "Update" : "Register"}
                  </button>
                  <button
                    className="btn btn-danger"
                    type="reset"
                    value="Reset"
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <div className="signup-image col-md-4">
              <figure>
                <img src={SIGN} alt="" />
              </figure>
              <a className="term-service" href="./">
                I am already member
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form
