import React from "react";
import LoginImg from "../../Assets/login.jpg";
import { Link } from "react-router-dom";
import "./login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate()
    const formik = useFormik({
      initialValues: {
        email: "",
        phonenumber: "",
        password: "",
      },

      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("This field is required"),
      }),
      onSubmit: () => {
        navigate("/dashboard");
      },
    });
    
  return (
    <div className="neat">
      <section className="login-section--1">
        <img src={LoginImg} alt="login" className="loginImg" />
      </section>

      <section className="login--section--2">
        <form onSubmit={formik.handleSubmit} className="form-list">
          <label htmlFor="email">Email</label>
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

          <label htmlFor="psw">Password</label>
          <div>
            <input
              className="psw"
              id="password"
              name="password"
              type="text"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="login">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="login-span">Create account</span>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
