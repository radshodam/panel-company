import React from 'react';
import styled from 'styled-components';
const StyleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 30px;
`;
const StyleBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align-last: center;
    height: 295px;
    width: 400px;
    border-radius: 9px;
    box-shadow: #dce9f5 2px 0px 8px;
    padding: 26px;
    line-height: 3;
    margin: 20px 2px;
    &:hover {
        transition: ease-in 0.5s;
        box-shadow: #ecd8fad4 4px 2px 4px;
    }
`;
const StyleIcon = styled.span`
    width: 100px;
    margin: 11px auto;
    border-radius: 8px;
    padding: 8px;
`;
const StyleDescrip = styled.h4`
    padding: 8px;
`;
const StyleTitle = styled.h4`
    padding: 8px;
`;
interface BoxProps {
    BoxItem: { title: string; description: string; icon: any; cssStyle: string }[];
}
const Box: React.FC<BoxProps> = ({ BoxItem }) => {
    return (
        <>
            <StyleContainer>
                {BoxItem.map((items) => {
                    return (
                        <StyleBox>
                            <StyleIcon className={items.cssStyle}>{items.icon}</StyleIcon>
                            <StyleDescrip>{items.description}</StyleDescrip>
                            <StyleTitle>{items.title}</StyleTitle>
                        </StyleBox>
                    );
                })}
            </StyleContainer>
        </>
    );
};

export default Box;
