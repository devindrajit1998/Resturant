import React, { useState } from "react";
import menuApi from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

export default function Resturant() {
  const [menuData, setMenuData] = useState(menuApi);

  const categoryList = [
    ...new Set(
      menuApi.map((allCate) => {
        return allCate.category;
      })
    ),
    "All",
  ];
  const [newNavList, setNewNavList] = useState(categoryList);

  const filterNav = (nData) => {
    if (nData === "All") {
      setMenuData(menuApi);
      return;
    } else {
      const nFilter = menuApi.filter((newData) => {
        return newData.category === nData;
      });
      setMenuData(nFilter);
    }
  };

  return (
    <>
      <Navbar filterNav={filterNav} newNavList={newNavList} />
      <MenuCard menuData={menuData} />
    </>
  );
}
