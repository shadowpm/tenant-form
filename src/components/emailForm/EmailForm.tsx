import { useState, ChangeEvent } from "react";
import FormTemplate from "../formTemplate/FormTemplate";
import { useNavigate } from "react-router-dom";
import { useCustomState } from "../../stateManagement/useCustomState";

const EmailForm = () => {
  const navigate = useNavigate();
  const { useContextValue } = useCustomState();
  const { state, dispatch } = useContextValue();
  const [email, setEmail] = useState(state.email);
  const [error, setError] = useState(false);
  const [invalidEmail, setInvaldEmail] = useState(false);

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setError(false);
  };

  const isEmailValid = (input: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const handleNextClick = () => {
    if (email.trim() && !isEmailValid(email)) {
      setError(true);
      setInvaldEmail(true);
    }
    if (isEmailValid(email)) {
      dispatch({ type: "SET_EMAIL", payload: email });
      navigate("/phone-number");
    } else {
      setError(true);
    }
  };

  return (
    <FormTemplate
      heading="Please enter your email:"
      textInputTitle="Email"
      handleNextClick={handleNextClick}
      progressPercentage={40}
      inputValue={email}
      onChangeInputValue={handleEmailChange}
      inputError={error}
      errorText={
        invalidEmail
          ? "Email format is wrong! Email must contain @ and . "
          : undefined
      }
    />
  );
};

export default EmailForm;
