import { Button } from "@mui/material";
import { IPrimaryButton } from "./PrimaryButton.interface";
const PrimaryButton = ({ text, onClick }: IPrimaryButton) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export { PrimaryButton };
