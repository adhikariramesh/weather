import React, { useState } from 'react'
import MenuCard from './MenuCard';
import Menu from "./MenuApi"
import Navbar from './Navbar';


    const unickDate = [...new Set(Menu.map((currentElmnt) => {
        return currentElmnt.category;
    })),"All"];
    console.log(unickDate)


const Resturent = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(unickDate);

    const filterItem = (activeItem) => {
        if(activeItem=="All"){
            setMenuData(Menu);
            return;
        }
        const updateList = Menu.filter((currentData) => {
            return currentData.category === activeItem;
        });
        setMenuData(updateList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}/>
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturent
