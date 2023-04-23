import React from "react";
import "./SignUpBtn.css";

function SignUpBtn({ variant }) {
  // Conditionally apply the appropriate class based on the variant prop
  const buttonClassName =
    variant === "primary"
      ? "btn botton sign-up primary"
      : "btn botton sign-up secondary";

  return (
    <a className={buttonClassName} href="/SignUp">
      Join for free
    </a>
  );
}

export default SignUpBtn;
