import React, { useState } from "react";

import Button from "../../UI/Button/Button2";
import FormControl from "../../UI/Button/FormControl";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    const inputValue = event.target.value.trim();
    setIsInputValid(inputValue && inputValue.length > 0);
    setEnteredValue(inputValue);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const isValid = enteredValue && enteredValue.length > 0;
    setIsInputValid(isValid);
    if (isValid) {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl invalid={!isInputValid}>
        <label >
          Course Goal
        </label>
        <input
          type="text" onChange={goalInputChangeHandler}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
