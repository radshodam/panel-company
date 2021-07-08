import React, { useState } from 'react';
import styled from 'styled-components';
import { BsBell } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';
import bannerimage from '../../assets/images/banner1.png';
const Banner = styled.div`
    background-image: url(${bannerimage});
    background-repeat: no-repeat;
    width: 92%;
    height: 66vh;
    margin: 0 auto;

`;
const ParStyle = styled.div`
    width: 90%;
    background: #ffcc004a;
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    border-radius: 23px;
    padding: 0 23px;
    overflow: hidden;
    box-shadow: #dce9f5 2px 0px 8px;

    &:hover {
        transition: ease-in 0.5s;
        box-shadow: #ffcc0092 3px 0px 4px;
    }
`;
const StyleIcon = styled.span`
    display: flex;
    color: orange;
    font-size: 28px;
    padding: 13px;
    height: 130px;
    align-items: center;
`;

const StyleDelIconBTN = styled.button`
    background: transparent;
    display: flex;
    color: #ff4800;
    font-size: 23px;
    height: 32px;
    align-items: flex-start;
    margin: 10px;
    border: none;
    outline: none;
    cursor: pointer;
`;
const DFlex = styled.div`
    display: flex;
    justify-content: flex-start;
`;
const StyleTitl = styled.h4`
    font-size: 18px;
    font-weight: 500;
    color: #707070;
    align-self: center;
`;

const HeadDash = () => {
    const [show, setShow] = useState<Boolean>(true);
    const handleDel = () => {
        setShow(false);
    };
    return (
        <>
            <Banner>
               
            </Banner>
            {show ? (
                <ParStyle>
                    <DFlex>
                        <StyleIcon>
                            <BsBell />
                        </StyleIcon>
                        <StyleTitl>تاریخ انقضای 25 محصول رو به اتمام است</StyleTitl>
                    </DFlex>
                    <StyleDelIconBTN onClick={handleDel}>
                        <IoCloseOutline />
                    </StyleDelIconBTN>
                </ParStyle>
            ) : null}
        </>
    );
};

export default HeadDash;
