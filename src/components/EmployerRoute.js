import React from "react";
import DefaultLayout from "./DefaultLayout";

function EmployerRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "/login";
  }
  else if (user.role === 'employer') {
    return <DefaultLayout>{children}</DefaultLayout>;
  } else {
    window.location.href = "/posted-jobs";
  }
}

export default EmployerRoute;
