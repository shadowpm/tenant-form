import LinearProgressWithLabel from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import "./styles.css";

interface Props {
  progressPercentage: number;
}

const ProgressBar: React.FC<Props> = ({ progressPercentage }) => {
  return (
    <div className="progress-bar">
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel
          variant="determinate"
          value={progressPercentage}
        />
      </Box>
    </div>
  );
};

export default ProgressBar;
