export interface ItemWithDetailsProps {
  id: string;
  avatarURL: string;
  title: string;
  description: string;
  view: ItemWithDetailsView;
  active?: boolean;
  onDelete?: (id: string) => void;
  onClick?: (id: string) => void;
}

export enum ItemWithDetailsView {
  CHIP = "chip",
  LIST = "list",
}

export interface ItemDetails {
  id: string;
  name: string;
  email: string;
  imgURL: string;
}
