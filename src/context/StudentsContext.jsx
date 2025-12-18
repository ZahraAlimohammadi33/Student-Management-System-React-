import { createContext, useReducer } from "react";

const StudentContext = createContext();

const studentReducer = (state, action) => {
  switch (action.type) {
    case "fetch":
      return [...action.payload];

    case "search":
      return [...action.payload];

    case "remove":
      return state.filter((student) => student.id != action.payload);

    default:
      return state;
  }
};

const StudentProvider = (props) => {
  const [studentState, dispatch] = useReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ studentState, dispatch }}>
      {props.children}
    </StudentContext.Provider>
  );
};

export { StudentContext, StudentProvider };
