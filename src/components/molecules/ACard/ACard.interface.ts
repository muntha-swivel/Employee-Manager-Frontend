import { IEmployee } from "shared";
export interface IACard extends IEmployee {
  onClickEdit: () => void;
  onClickDelete: () => void;
}
