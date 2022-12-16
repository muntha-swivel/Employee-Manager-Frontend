import { IEmployee } from "shared";

export interface ICards {
  data: IEmployee[];
  onClickDelete: () => void;
}
