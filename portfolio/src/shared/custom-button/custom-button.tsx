import "./custom-button.scss";
import { ButtonI } from "../shared-models";
import { Button } from "@mui/material";

const CustomButton = ({
  content,
  backgroundColor = "#3B82F6",
  width = "100px",
  color = "white",
  disabled = false,
  buttonClickHandler,
}: ButtonI) => {
  return (
    <>
      <Button
        variant="contained"
        style={{
          backgroundColor: backgroundColor,
          width: width,
          color: color,
        }}
        onClick={buttonClickHandler}
        disabled={disabled}
      >
        {content}
      </Button>
    </>
  );
};

export default CustomButton;
