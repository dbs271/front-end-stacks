import React from "react";
import { Address, Restaurant } from "./model/resturant";

interface Info {
  info: Restaurant;
  // 함수의 매개변수 타입을 지정하고 리턴 타입을 지정한다. (보통 리턴되는 값의 경우 비어있기 때문에 void 사용, 만약 return true와 같이 타입이 바로 지정되는 값일 경우 해당 타입을 지정)
  changeAddress(address: Address): void;
}

const Store: React.FC<Info> = ({ info }) => {
  return <div>{info.name}</div>;
};

export default Store;
