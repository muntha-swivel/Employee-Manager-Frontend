import { CardBody, PictureButton } from "@atoms";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { IACard } from "./ACard.interface";
const ACard = ({
  firstName,
  lastName,
  email,
  phone,
  gender,
  photo,
  onClickDelete,
  onClickEdit,
}: IACard) => {
  return (
    <CardBody
      firstName={firstName}
      lastName={lastName}
      email={email}
      phone={phone}
      gender={gender}
      photo={photo}
    >
      <>
        <PictureButton
          onClick={onClickDelete}
          backgroundColor="secondary"
          icon={<DeleteIcon />}
        />
        <PictureButton
          onClick={onClickEdit}
          backgroundColor="secondary"
          icon={<ManageAccountsIcon />}
        />
      </>
    </CardBody>
  );
};

export { ACard };
