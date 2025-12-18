import { useState } from "react";
import Modal from "../UI/modal/modal";

const ErrorHandler = (WrappedComponent, axios) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const withHooksHandler = (props) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        setShow(true);
        setError(error.message);
      }
    );
    return (
      <>
        <Modal
          show={show}
          close={() => {
            setShow(false);
          }}
        >
          {error}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };

  return withHooksHandler;
};

export default ErrorHandler;
