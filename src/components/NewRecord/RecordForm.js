import { useState } from "react";
import "./RecordForm.css";

const RecordForm = (props) => {
  const [userInput, setUserInput] = useState({
    // initial value of the form
    enteredUsername: "",
    enteredAge: "",
  });

  const usernameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredUsername: event.target.value,
      };
    });
  };

  const ageChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAge: event.target.value,
      };
    });
  };

  // when user submit the input
  const submitHandler = (event) => {
    event.preventDefault();

    const recordData = {
      username: userInput.enteredUsername,
      age: +userInput.enteredAge,
    };

    props.onSaveRecordData(recordData);
    setUserInput(() => {
      return {
        enteredUsername: "",
        enteredAge: "",
      };
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Username</label>
          <input
            type="text"
            onChange={usernameChangeHandler}
            value={userInput.enteredUsername}
          />
        </div>
        <div className="new-expense__control">
          <label>Age (Years)</label>
          <input
            type="number"
            min="0"
            step="1"
            onChange={ageChangeHandler}
            value={userInput.enteredAge}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default RecordForm;
