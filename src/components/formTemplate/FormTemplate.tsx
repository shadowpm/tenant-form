import { ChangeEvent } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import NavigationButtonGroup from "../ui/NavigationButtonGroup";
import PageHeading from "../ui/PageHeading";
import ProgressBar from "../ui/ProgressBar";

interface Props {
  heading: string;
  textInputTitle: string;
  handleNextClick: () => void;
  backButtton?: boolean;
  progressPercentage: number;
  inputValue: string;
  onChangeInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  inputError?: boolean;
  numeric?: boolean;
  errorText?: string;
}

const FormTemplate: React.FC<Props> = ({
  heading,
  textInputTitle,
  handleNextClick,
  backButtton,
  progressPercentage,
  inputValue,
  onChangeInputValue,
  inputError,
  numeric,
  errorText,
}) => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleNextClick}
>
      <div>
        <PageHeading heading={heading} />
        <TextField
          error={inputError}
          value={inputValue}
          onChange={onChangeInputValue}
          required
          id="outlined-required"
          label={textInputTitle}
          type={numeric ? "number" : "text"}
          helperText={inputError && (errorText || "This field cannot be empty")}
        />
        <NavigationButtonGroup
          backButtton={backButtton}
          handleNextClick={handleNextClick}
        />
      </div>
      <ProgressBar progressPercentage={progressPercentage} />
    </Box>
  );
};

export default FormTemplate;
