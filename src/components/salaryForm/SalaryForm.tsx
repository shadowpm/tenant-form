import { useNavigate } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import NavigationButtonGroup from "../ui/NavigationButtonGroup";
import FormHelperText from "@mui/material/FormHelperText";
import PageHeading from "../ui/PageHeading";
import { useCustomState } from "../../stateManagement/useCustomState";
import "./styles.css";
import ProgressBar from "../ui/ProgressBar";

const SalaryForm = () => {
  const navigate = useNavigate();
  const { useContextValue } = useCustomState();
  const { dispatch } = useContextValue();
  const [selectedSalary, setSelectedSalary] = useState("");
  const [error, setError] = useState(false);

  const handleNextClick = () => {
    if (selectedSalary) {
      dispatch({ type: "SET_SALARY", payload: selectedSalary });
      navigate("/summary");
    } else {
      setError(true);
    }
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedSalary(event.target.value);
  };

  return (
    <FormControl error={error}>
      <PageHeading heading="Please choose your salary group:" />
      <div className="radio-container">
        <FormLabel id="demo-radio-buttons-group-label">Salary</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          value={selectedSalary}
          onChange={handleRadioChange}
          defaultValue=""
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="0 - 1.000"
            control={<Radio />}
            label="0 - 1.000"
          />
          <FormControlLabel
            value="1.000 - 2.000"
            control={<Radio />}
            label="1.000 - 2.000"
          />
          <FormControlLabel
            value="2.000 - 3.000"
            control={<Radio />}
            label="2.000 - 3.000"
          />
          <FormControlLabel
            value="3.000 - 4.000"
            control={<Radio />}
            label="3.000 - 4.000"
          />
          <FormControlLabel
            value="More than 4.000"
            control={<Radio />}
            label="More than 4.000"
          />
        </RadioGroup>
        {error && <FormHelperText>One must be chosen!</FormHelperText>}
      </div>
      <NavigationButtonGroup handleNextClick={handleNextClick} />
      <ProgressBar progressPercentage={80} />
    </FormControl>
  );
};

export default SalaryForm;
