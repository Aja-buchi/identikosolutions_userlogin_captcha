import React from 'react'
import './changepassword.css'
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      retypePassword: "",
    },

    validationSchema: Yup.object({
      oldPassword: Yup.string().required("This field is required"),
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
          <label htmlFor="psw">Old Password</label>
          <div>
            <input
              className="psw"
              id="oldPassword"
              name="oldPassword"
              type="text"
              placeholder="Old Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
            />
            {formik.touched.oldPassword && formik.errors.oldPassword ? (
              <div style={{ color: "red" }}>{formik.errors.oldPassword}</div>
            ) : null}
          </div>
        </div>

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

export default ChangePassword;