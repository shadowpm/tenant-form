import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import "./styles.css";

interface Props {
  handleNextClick: () => void;
  backButtton?: boolean;
}

const NavigationButtonGroup: React.FC<Props> = ({
  handleNextClick,
  backButtton,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="button-container">
      {backButtton !== false && (
        <IconButton
          aria-label="delete"
          className="back-button"
          color="primary"
          onClick={handleBackClick}
        >
          <ArrowBackIcon fontSize="inherit" />
        </IconButton>
      )}
      <Button variant="contained" onClick={handleNextClick}>
        Next
      </Button>
    </div>
  );
};

export default NavigationButtonGroup;
