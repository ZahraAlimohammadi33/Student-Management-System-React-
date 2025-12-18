import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { Students } from "../components/students/student";
import Button from "../UI/buttons/button";
import { StudentContext } from "../context/StudentsContext";
import Spinner from "../components/spinner/spinner";

const HomePage = () => {
  const [toggle, setToggle] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  const [loading, setLoading] = useState(true);
  const [arrayHolder, setArrayHolder] = useState([]);
  const { studentState, dispatch } = useContext(StudentContext);

  const elementRef = useRef();
  const api =
    "https://686f91df91e85fac42a19a24.mockapi.io/Students/data/students";
  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        dispatch({ type: "fetch", payload: res.data });
        setArrayHolder(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Axios error:", err);
      });
  }, []);

  const deleteHandler = (id) => {
    console.log(id);
    console.log(`${api}/${id}`);
    axios
      .delete(`${api}/${id}`)
      .then(() => {
        dispatch({ type: "remove", payload: id });
      })
      .then(() => {
        alert("deleted");
      });
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const searchFilterHandler = (event) => {
    const items = arrayHolder.filter((item) => {
      return (
        item.name.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1
      );
    });
    setSearchBarValue(event.target.value);

    dispatch({ type: "search", payload: items });
  };

  const executScroll = () => {
    window.scrollTo(0, elementRef.current.offsetTop);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        value={searchBarValue}
        onChange={searchFilterHandler}
        className="search-bar"
        ref={elementRef}
        placeholder="اسمشو وارد کن . . "
      />
      <Button type="toggle" function={toggleHandler}>
        تغییر وضعیت نمایش
      </Button>
      {loading ? (
        <Spinner />
      ) : (
        <Students
          studentList={studentState}
          deleted={deleteHandler}
          toggle={toggle}
        />
      )}
    </div>
  );
};

export default HomePage;
