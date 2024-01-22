import { useState, ChangeEvent } from "react";
import FormTemplate from "../formTemplate/FormTemplate";
import { useNavigate } from "react-router-dom";
import { useCustomState } from "../../stateManagement/useCustomState";

const NameForm = () => {
  const navigate = useNavigate();
  const { useContextValue } = useCustomState();
  const { state, dispatch } = useContextValue();
  const [fullName, setFullName] = useState(state.name);
  const [error, setError] = useState(false);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const handleNextClick = () => {
    //added now
    if (fullName.trim()) {
      dispatch({ type: "SET_NAME", payload: fullName });
      navigate("/email");
    } else {
      setError(true);
    }
  };

  return (
    <FormTemplate
      heading="Please enter your full name:"
      textInputTitle="Full name"
      handleNextClick={handleNextClick}
      backButtton={false}
      progressPercentage={20}
      inputValue={fullName}
      onChangeInputValue={handleNameChange}
      inputError={error}
    />
  );
};

export default NameForm;
