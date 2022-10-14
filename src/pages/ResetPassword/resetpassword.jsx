import React from 'react'
import './resetpassword.css'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";

function ResetPassword() {
   const navigate = useNavigate();
   const formik = useFormik({
     initialValues: {
       newPassword: "",
       retypePassword: "",
     },

     validationSchema: Yup.object({
       newPassword: Yup.string().required("This field is required"),
       retypePassword: Yup.string().required("This field is required"),
     }),
     onSubmit: () => {
       navigate("/");
     },
   });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form-list">
        <div>
          <label htmlFor="psw">New Password</label>
          <div>
            <input
              className="psw"
              id="newPassword"
              name="newPassword"
              type="text"
              placeholder="New Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.newPassword}
            />
            {formik.touched.newPassword && formik.errors.newPassword ? (
              <div style={{ color: "red" }}>{formik.errors.newPassword}</div>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="psw">Re-Type Password</label>
          <div>
            <input
              className="psw"
              id="retypePassword"
              name="retypePassword"
              type="text"
              placeholder="Retype Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.retypePassword}
            />
            {formik.touched.retypePassword && formik.errors.retypePassword ? (
              <div style={{ color: "red" }}>{formik.errors.retypePassword}</div>
            ) : null}
          </div>
    
          <button type="submit" className="signup-btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default ResetPassword;