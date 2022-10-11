import React from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import './forgotpassword.css'

function ForgotPassword() {

  const formik = useFormik({
    initialValues: {
      email: "" 
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
  });

  return (
    <>
      <div className="verification-card">
        <div className="card-content">
          <span>
            <MdOutlineMarkEmailRead className="sentEmail-icon" />
          </span>
          <div className="verification-text">
            <h4>Input your email</h4>
            <form className="form-list">
              <label htmlFor="email"></label>
              <div>
                <input
                  className="email"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div style={{ color: "red" }}>{formik.errors.email}</div>
                ) : null}
              </div>
            </form>
            <button onClick={(e)=>{e.preventDefault();window.location.replace("https://mail.google.com")}} type="submit" className="verify-btn">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
