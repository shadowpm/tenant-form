import { useState, ChangeEvent } from "react";
import FormTemplate from "../formTemplate/FormTemplate";
import { useNavigate } from "react-router-dom";
import { useCustomState } from "../../stateManagement/useCustomState";

const PhoneNumberForm = () => {
  const navigate = useNavigate();
  const { useContextValue } = useCustomState();
  const { state, dispatch } = useContextValue();
  const [phoneNumber, setPhoneNumber] = useState(state.phone);
  const [error, setError] = useState(false);

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleNextClick = () => {
    if (phoneNumber) {
      dispatch({ type: "SET_PHONE", payload: phoneNumber });
      navigate("/salary");
    } else {
      setError(true);
    }
  };
  return (
    <FormTemplate
      heading="Please enter your phone number:"
      textInputTitle="Phone number"
      handleNextClick={handleNextClick}
      progressPercentage={60}
      inputValue={phoneNumber}
      onChangeInputValue={handlePhoneNumberChange}
      inputError={error}
      numeric={true}
    />
  );
};

export default PhoneNumberForm;
