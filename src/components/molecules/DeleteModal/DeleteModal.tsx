import { AlertModal } from "@atoms";
import { IDeleteModal } from "./DeleteModal.interface";
import { PrimaryButton } from "@atoms";
const DeleteModal = ({
  employee,
  isOpen,
  onClickClose,
  onClickDelete,
}: IDeleteModal) => {
  return (
    <AlertModal
      mainTitle="Delete Employee"
      text={`Are you sure you want to delete employee ${employee?.firstName}`}
      isOpen={isOpen}
    >
      <>
        <PrimaryButton text="Delete" onClick={onClickDelete} />
        <PrimaryButton text="Close" onClick={onClickClose} />
      </>
    </AlertModal>
  );
};

export { DeleteModal };
