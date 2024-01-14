import { useNavigate } from "react-router-dom";
import PageHeading from "../ui/PageHeading";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { useCustomState } from "../../stateManagement/useCustomState";
import "./styles.css";

const style = {
  py: 0,
  width: "100%",
  maxWidth: 360,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "divider",
  backgroundColor: "background.paper",
};

const Summary = () => {
  const navigate = useNavigate();
  const { useContextValue } = useCustomState();
  const { state, dispatch } = useContextValue();

  const handleBackToTheBeginning = () => {
    dispatch({ type: "SET_NAME", payload: "" });
    dispatch({ type: "SET_EMAIL", payload: "" });
    dispatch({ type: "SET_PHONE", payload: "" });
    dispatch({ type: "SET_SALARY", payload: "" });
    navigate("/");
  };
  return (
    <div>
      <PageHeading heading="Data summary" />
      <List sx={style}>
        <ListItem>
          <ListItemText primary={"Name: " + state.name} />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary={"Email: " + state.email} />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText primary={"Phone number: " + state.phone} />
        </ListItem>
        <Divider variant="middle" component="li" />
        <ListItem>
          <ListItemText primary={"Salary range: " + state.salary_indication} />
        </ListItem>
      </List>
      <div className="beginning-button">
        <Button variant="contained" onClick={handleBackToTheBeginning}>
          Back to the beginning
        </Button>
      </div>
    </div>
  );
};

export default Summary;
