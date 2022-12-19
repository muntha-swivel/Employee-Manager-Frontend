import { IEmployee } from "shared";

export interface ICardView {
  data: IEmployee[];
  onClickDelete: () => void;
}
