import React from 'react';
import { IoBasketOutline } from 'react-icons/io5';
import Panir from '../../assets/images/panir.png';
import Dough from '../../assets/images/dough.png';
import BoxPro from './BoxPro';
import styled from 'styled-components';
const StylePar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`;
const dataHeads = [
    {
        icon: <IoBasketOutline size={23} />,
        title: 'محصولات جدید',
        cssStyle: 'textred'
    }
];
const dataBox = [
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    }
];
const dataHeads2 = [
    {
        icon: <IoBasketOutline size={23} />,
        title: 'تخفیفات ویژه',
        cssStyle: 'textblue'
    }
];
const dataBox2 = [
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Panir,
        title: 'پنیر',
        price: 'قیمت:9000 تومان'
    },
    {
        img: Dough,
        title: 'دوغ',
        price: 'قیمت:9000 تومان'
    }

];
const dataButton={
    title:"اشتراک گذاری محصولات جدید برای فروشگاه به همراه توضیحات و شرایط ویژه"
}
const dataButton2={
    title:"اشتراک گذاری تخفیفات ویژه برای فروشگاه به همراه توضیحات و شرایط ویژه"
}
const BoxProductsImg: React.FC = () => {
    return (
        <StylePar>
            <BoxPro dataHeads={dataHeads} dataBox={dataBox} dataButton={dataButton} />
            <BoxPro dataHeads={dataHeads2} dataBox={dataBox2} dataButton={dataButton2}/>
        </StylePar>
    );
};

export default BoxProductsImg;
