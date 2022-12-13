import { CardBody, PictureButton } from "@atoms";
import DeleteIcon from "@mui/icons-material/Delete";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { IEmployee } from "shared";

const ACard = ({
  firstName,
  lastName,
  email,
  phone,
  gender,
  image,
}: IEmployee) => {
  return (
    <CardBody
      firstName={firstName}
      lastName={lastName}
      email={email}
      phone={phone}
      gender={gender}
      image={image}
    >
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
