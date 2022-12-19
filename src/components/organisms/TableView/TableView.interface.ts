import { IEmployee } from "shared";
export interface ITableView {
  data: IEmployee[];
  onClickDelete: () => void;
}
