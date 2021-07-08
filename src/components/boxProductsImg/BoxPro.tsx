import React from 'react';
import styled from 'styled-components';

const StyleBoxPar = styled.div`
    border-radius: 9px;
    box-shadow: #dce9f5 2px 0px 8px;
    line-height: 3;
    margin: 66px 32px;
    width: 550px;
    padding: 8px;
`;
const ParStyle = styled.div`
    display: flex;
    padding: 5px;
    margin: 5px 22px;

    img {
        width: 60px;
        height: 60px;
    }
    div {
        display: flex;
        flex-direction: column;
        padding: 0 12px;
        height: fit-content;
    }
`;

const StyleHead = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    border-bottom: 1px solid #dce9f5;
`;
const StyleBut = styled.div`
    display: flex;
    justify-content: center;
    background: #8551fd;
    text-align: center;
    width: 100%;
    margin: 5px auto;
    border-radius: 9px;
    box-shadow: #dce9f5 2px 0px 8px;
    color: white;
`;
const StyleIcon = styled.span`
    margin: 8px 10px;
`;
interface DataHeadPro {
    dataHeads: { icon: any; title: string; cssStyle: string }[];
    dataBox: { img: string; price: string; title: string }[];
    dataButton:{title:string}
}

const BoxPro: React.FC<DataHeadPro> = ({ dataHeads, dataBox,dataButton }) => {
    return (
        <StyleBoxPar>
            {dataHeads?.map((m) => {
                return (
                    <>
                        <StyleHead className={m.cssStyle}>
                            <StyleIcon>{m.icon}</StyleIcon>
                            <h4>{m.title}</h4>
                        </StyleHead>
                    </>
                );
            })}
            <div>
                {dataBox.map((n) => (
                    <ParStyle>
                        <img src={n.img} alt="محصولات" />
                        <div>
                            <h4>{n.title}</h4>
                            <h5>{n.price}</h5>
                        </div>
                    </ParStyle>
                ))}
            </div>
            <div>
           
                <StyleBut>
                  {dataButton.title}
                </StyleBut>
            </div>
        </StyleBoxPar>
    );
};

export default BoxPro;
