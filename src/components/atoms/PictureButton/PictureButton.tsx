import { IconButton } from "@mui/material";
import { IPictureButton } from "./PictureButton.interface";
import DeleteIcon from "@mui/icons-material/Delete";

const PictureButton = ({ icon, backgroundColor, onClick }: IPictureButton) => {
  return (
    <IconButton
      color="primary"
      sx={{ backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      {icon}
    </IconButton>
  );
};

export { PictureButton };
