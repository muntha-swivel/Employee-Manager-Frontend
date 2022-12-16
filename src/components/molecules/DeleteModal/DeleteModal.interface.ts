import { IEmployee } from "shared";
export interface IDeleteModal {
  employee: IEmployee;
  isOpen: boolean;
  onClickDelete: () => void;
  onClickClose: () => void;
}
