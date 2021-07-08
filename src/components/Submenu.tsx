import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding: 2rem;
    text-decoration: none;
    color: #ffffff;

    &:hover {
        background-color: #8e63f6ad;
        border-right: 4px solid #3b00df;
        color: #ffffff;
    }
    &:active {
        background-color: #8e63f6ad;
        border-right: 4px solid #6d44dc;
        color: black;
    }
`;

const SidebarLabel = styled.span`
    margin-right: 1rem;
`;

const DropdownLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 1.125rem;
    padding-right: 3rem;
    text-decoration: none;
    color: #ffffff;
    background-color: #6d44dc;

    &:hover {
        background-color: #8e63f6ad;
        color: #ffffff;
    }
  
`;


const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>

                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {

                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default Submenu;
