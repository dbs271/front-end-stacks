import React, { useState } from "react";
import BestMenu from "./BestMenu";
import { Address, Restaurant } from "./model/resturant";
import Store from "./Store";

let data: Restaurant = {
  name: "한식당",
  category: "western",
  address: {
    city: "gwang-ju",
    detail: "gonjiam",
    zipCode: 232323,
  },
  menu: [
    { name: "rose pasta", price: 2000, category: "PASTA" },
    { name: "garlic steak", price: 3000, category: "STEAK" },
  ],
};

// 함수 컴포넌트를 리턴하는 값에는 리액트에서 제공하는 React.FC 타입을 사용
const App: React.FC = () => {
  // useState를 사용할 때 사용하고자 하는 타입은 제네릭(<>) 타입을 이용해 사용
  const [resturant, setResturant] = useState<Restaurant>(data);

  const changeAddress = (address: Address) => {
    setResturant({ ...resturant, address: address });
  };

  const showBestMenu = (name: string) => {
    return name;
  };

  return (
    <div>
      <Store info={resturant} changeAddress={changeAddress} />
      <BestMenu
        name="potato pizza"
        category="pizza"
        price={1000}
        showBestMenu={showBestMenu}
      />
    </div>
  );
};

export default App;
