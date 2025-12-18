import { useParams } from "react-router-dom";
import Button from "../UI/buttons/button";
import "../components/students/student.css";
import React, { useEffect, useRef, useState , useContext} from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";

const EditStudent = () => {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
  const { authenticated } = useContext(AuthContext);
  const nameRef = useRef();
  const classRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  useEffect(() => {
    axios
      .get(
        `https://686f91df91e85fac42a19a24.mockapi.io/Students/data/students/${id}`
      )
      .then((res) => {
        console.log(res);
        setStudentData(res.data);
      });
    console.log(id);
  }, []);

  const EditHandler = () => {
    const editedStudent = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      classNo: classRef.current.value,
      phone: phoneRef.current.value,
    };
    axios
      .put(
        `https://686f91df91e85fac42a19a24.mockapi.io/Students/data/students/${id}`,
        editedStudent
      )
      .then(() => {
        console.log("edited");
      });
  };
  return (
      <ProtectedRoute authenticated={authenticated}>
         !studentData ? (
    <p>در حال بارگذاری اطلاعات دانش‌آموز...</p>
  ) : (
    <div className="students">
      <h2>ویرایش دانش آموز</h2>

      <label>نام و نام خانوادگی</label>
      <input type="text" defaultValue={studentData.name} ref={nameRef} />

      <label>کلاس</label>
      <input type="text" defaultValue={studentData.classNo} ref={classRef} />

      <label>شماره تلفن</label>
      <input type="number" defaultValue={studentData.phone} ref={phoneRef} />

      <label>ایمیل</label>
      <input type="email" defaultValue={studentData.email} ref={emailRef} />

      <Button type="success" function={EditHandler}>
        ویرایش اطلاعات
      </Button>
    </div>
  );
  </ProtectedRoute>
  );
};
export default EditStudent;
