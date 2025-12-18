import React, { useState, useContext } from "react";
import { NewStudent } from "../components/students/student";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import ProtectedRoute from "../components/ProtectedRoute";
const AddStudent = () => {
  const [result, setResult] = useState(false);
  const { authenticated } = useContext(AuthContext);
 
  const added = (name, classNo, phone, email) => {
    axios.post(
        "https://686f91df91e85fac42a19a24.mockapi.io/Students/data/students",
        {
          name: name,
          email: email,
          classNo: classNo,
          phone: phone,
        }
      )
      .then(() => {
        alert("added");
        setResult(true);
      });
  };

  return (
    <ProtectedRoute authenticated={authenticated}>
      {result && <Navigate to="/" />}
      <NewStudent added={added} />
    </ProtectedRoute>
  );
};

export default AddStudent;
