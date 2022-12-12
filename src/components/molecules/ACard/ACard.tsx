import { CardBody, PictureButton } from "@atoms";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

const ACard = () => {
  return (
    <CardBody>
      <>
        <PictureButton
          onClick={() => console.log("hello world")}
          backgroundColor="secondary"
          icon={<DeleteIcon />}
        />
        <PictureButton
          onClick={() => console.log("hello world")}
          backgroundColor="secondary"
          icon={<ManageAccountsIcon />}
        />
      </>
    </CardBody>
  );
};

export { ACard };
