import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import './emailverification.css'

export default function EmailVerification (){
  
    return (
      <>
        <div className="verification-card">
          <div className="card-content">
            <span>
              <MdOutlineMarkEmailRead className="sentEmail-icon" />
            </span>
            <div className="verification-text">
              <h4>Verify your mail</h4>
              <p>
                Hi there, use the link below to verify
                <br />
                your email and start enjoying our services
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.replace("https://mail.google.com");
                }}
                type="submit"
                className="verify-btn"
              >
                Verify email
              </button>
            </div>
          </div>
        </div>
      </>
    );
}