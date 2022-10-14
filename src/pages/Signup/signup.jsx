import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./signup.css";
import RegisterImg from "../../Assets/register.jpeg";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Signup() {
  const [hide, setHide] = useState(true);
  const [hideP, setHideP] = useState(true);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  function handleOnChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }


  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-])|(\\([0-9]{2,3}\\)[ \\-])|([0-9]{2,4})[ \\-])?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmpassword: "",
    },

    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      lastname: Yup.string()
        .max(12, "Must be 12 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.string().matches(
        phoneRegExp,
        "Phone number is not valid"
      ),
      password: Yup.string().required("This field is required"),
      confirmpassword: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
    }),
    onSubmit: () => {
      localStorage.setItem('firstname', JSON.stringify(formik.values.firstname));
      localStorage.setItem("lastname", JSON.stringify(formik.values.lastname));
      localStorage.setItem('email', JSON.stringify(formik.values.email));
      localStorage.setItem('phonenumber', JSON.stringify(formik.values.phonenumber));
      localStorage.setItem("password", JSON.stringify(formik.values.password));
      localStorage.setItem("confirmPassword", JSON.stringify(formik.values.confirmpassword)
      );

      navigate("/emailverification");
    },
  });

  const showPassword = () => {
    setHide((prevState) => {
      return !prevState;
    });
  };

  const hidePassword = () => {
    setHideP((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="hero">
      <section className="hero-1">
        <div>
          <img src={RegisterImg} alt="register" className="register" />
        </div>
      </section>

      <section className="hero-2">
        <p className="list">
          <strong>REGISTER HERE &darr;</strong>
        </p>
        <form onSubmit={formik.handleSubmit} className="form">
          <label htmlFor="firstname">Firstname</label>
          <div>
            <input
              className="fname"
              id="firstname"
              name="firstname"
              type="text"
              placeholder="Firstname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstname}
            />
            {formik.touched.firstname && formik.errors.firstname ? (
              <div style={{ color: "red" }}>{formik.errors.firstname}</div>
            ) : null}
          </div>
          <label htmlFor="lastname">Lastname</label>
          <div>
            <input
              className="lname"
              id="lastname"
              name="lastname"
              type="text"
              placeholder="Lastname"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastname}
            />
            {formik.touched.lastname && formik.errors.lastname ? (
              <div style={{ color: "red" }}>{formik.errors.lastname}</div>
            ) : null}
          </div>
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
          <label htmlFor="phonenumber">Phone Number</label>
          <div>
            <input
              className="phonenumber"
              id="phonenumber"
              name="phonenumber"
              type="tel"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phonenumber}
            />
            {formik.touched.phonenumber && formik.errors.phonenumber ? (
              <div style={{ color: "red" }}>{formik.errors.phonenumber}</div>
            ) : null}
          </div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              className="psw"
              id="password"
              name="password"
              type={hide ? "password" : "text"}
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span>
              {hide ? (
                <button type="button" onClick={showPassword}>
                  Show
                </button>
              ) : (
                <button type="button" onClick={showPassword}>
                  Hide
                </button>
              )}
            </span>
            {formik.touched.password && formik.errors.password ? (
              <div style={{ color: "red" }}>{formik.errors.password}</div>
            ) : null}
          </div>
          <label htmlFor="confirmPassword">Confirm password</label>
          <div>
            <input
              className="confirmpsw"
              id="confirmpassword"
              name="confirmpassword"
              placeholder="Confirm Password"
              type={hideP ? "password" : "text"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmpassword}
            />
            <span>
              {hideP ? (
                <button type="button" onClick={hidePassword}>
                  Show
                </button>
              ) : (
                <button type="button" onClick={hidePassword}>
                  Hide
                </button>
              )}
            </span>
            {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
              <div style={{ color: "red" }}>
                {formik.errors.confirmpassword}
              </div>
            ) : null}
          </div>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={handleOnChange}
          />
          <button
            disabled={!verified}
            style={{ display: verified ? "block" : "none" }}
            type="submit"
            className="signup-btn"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}


