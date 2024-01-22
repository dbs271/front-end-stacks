// let data = {
//   name: "한식당",
//   category: "western",
//   address: {
//     city: "gwang-ju",
//     detail: "gonjiam",
//     zipCode: 232323,
//   },
//   menu: [
//     { name: "rose pasta", price: 2000, category: "PASTA" },
//     { name: "garlic steak", price: 3000, category: "STEAK" },
//   ],
// };

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};

// extends 기존 타입을 확장 시킬 때 사용

// 타입에 필요없는 값을 빼고 싶을 때 Omit<> 사용
export type AddressWithOutZip = Omit<Address, "zipCode">;

// 타입에 하나의 값만 가져오고 싶을 때는 Pick<> 사용
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

// api 데이터를 받아올 때?
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};
