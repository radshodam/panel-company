import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    background-color: #ffffff;
`;

const SidebarNav = styled.div<{ sidebar: boolean }>`
    z-index: 99;
    width: 285px;
    height: 100vh;
    background: linear-gradient(#8f65f6, #7b4af1);
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    overflow: auto;
    ::-webkit-scrollbar {
        background-color: #b3b3b3;
        width: 6px;
    }
    ::-webkit-scrollbar-track-piece {
        background-color: #ffffffd5;
    }
    ::-webkit-scrollbar-thumb {
        width: 1px;
        background-color: #5816f1;
    }
    ::-webkit-scrollbar-corner {
        background-color: #700949;
    }
    ::-webkit-resizer {
        width: 1px;
    }
`;

const NavIcon = styled(Link)`
    position: relative;
    top: 17px;
    right: 17px;
    height: 5rem;
    font-size: 2rem;
    margin-right: 2rem;
`;
const Logo = styled.div`
    display: flex;
    height: 143px;
    width: 196px;
    background-color: #54ba98b0;
    justify-content: center;
    margin: 35px auto;
    border-radius: 6px;
    align-items: center;
`;
const SidebarWrap = styled.div``;

const Sidebar: FC = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <Nav>
                <NavIcon to="#" onClick={showSidebar}>
                    <AiOutlineMenu />
                </NavIcon>
            </Nav>
            <IconContext.Provider value={{ color: '#f1f1f1', size: '22px' }}>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#" onClick={showSidebar}>
                            <AiOutlineClose />
                        </NavIcon>
                        <Logo>Logo</Logo>
                        {SidebarData.map((item, index) => {
                            return <Submenu item={item} key={index} />;
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};

export default Sidebar;
