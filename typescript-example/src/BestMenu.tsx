import React from "react";
import { Menu } from "./model/resturant";

// interface 는 extends 를 사용, type 은 type Props = Menu & {}
// Omit 사용
// interface Props extends Omit<Menu, 'price'>
interface Props extends Menu {
  showBestMenu(name: string): string;
}

const BestMenu: React.FC<Props> = ({ name, price, category, showBestMenu }) => {
  return <div>{name}</div>;
};

export default BestMenu;
