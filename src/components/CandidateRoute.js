import React from "react";
import DefaultLayout from "./DefaultLayout";

function CandidateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    window.location.href = "/login";
  }
  else if (user?.role === 'candidate' || user?.isAdmin) {
    return <DefaultLayout>{children}</DefaultLayout>;
  } else {
    window.location.href = "/posted-jobs";
  }
}

export default CandidateRoute;
