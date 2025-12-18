import React from "react";
import "./student.css";
import "./../../UI/buttons/button";
import { useRef } from "react";
import Button from "./../../UI/buttons/button";
import { Link } from "react-router-dom";

const Student = (props) => {
  return (
    <div className="students">
      <label>شماره دانش آموزی {props.id}</label>
      <label>
        {" "}
        نام و نام خانوادگی:
        <span>{props.name}</span>
      </label>

      <label>
        کلاس:
        <span>{props.classNum}</span>
      </label>

      <label>
        شماره تلفن:
        <span>{props.number}</span>
      </label>

      <label>
        {" "}
        ایمیل:
        <span>{props.email}</span>
      </label>

      <label>
        <Link to={"/student/" + props.id}>
          <Button type={"success"}>ویرایش</Button>
        </Link>
        <Button type={"danger"} function={props.deleted}>
          حذف
        </Button>
      </label>
    </div>
  );
};

const NewStudent = (props) => {
  const nameRef = useRef();
  const classRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const handleAdd = () => {
    props.added(
      nameRef.current.value,
      classRef.current.value,
      phoneRef.current.value,
      emailRef.current.value
    );

    nameRef.current.value = "";
    classRef.current.value = "";
    phoneRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <div className="students">
      <label>نام و نام خانوادگی</label>
      <input type="text" ref={nameRef} />

      <label>کلاس</label>
      <input type="text" ref={classRef} />

      <label>شماره تلفن</label>
      <input type="number" ref={phoneRef} />

      <label>ایمیل</label>
      <input type="email" ref={emailRef} />
      <label>
        <Button type={"success"} function={handleAdd}>
          افزودن
        </Button>
      </label>
    </div>
  );
};

const Students = (props) => {
  let classes = "";
  if (props.toggle) {
    classes = "student-section";
  }

  return (
    <div className={classes}>
      {props.studentList.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          id={student.id}
          classNum={student.classNo}
          number={student.phone}
          email={student.email}
          onChanged={(event) => props.onChanged(event, student.id)}
          deleted={() => props.deleted(student.id)}
        />
      ))}
    </div>
  );
};

export { Students, NewStudent };
