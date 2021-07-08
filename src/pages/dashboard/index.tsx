import React from 'react';
import { FaClipboardList, FaHandHoldingUsd, FaMoneyBillWave } from 'react-icons/fa';
import Box from '../../components/boxProducts/Box';
import { MyChart } from '../../components/chart/MyChart';
import { BiTaskX } from 'react-icons/bi';
import { IoIosTimer } from 'react-icons/io';
import { IoStorefrontOutline } from 'react-icons/io5';
import HeadDash from '../../components/HeadDash/HeadDash';
import BoxProductsImg from '../../components/boxProductsImg/boxProductsImg';

const Index: React.FC = () => {
    const BoxItem = [
        {
            title: '15',
            description: 'سابقه فروش شامل از کالای خاص',
            icon: <FaClipboardList size={50} color={'#4791FF'} />,
            cssStyle: 'blue'
        },
        {
            title: '2',
            description: 'چک برگشتی',
            icon: <BiTaskX size={50} color={'#FF2366'} />,
            cssStyle: 'red'
        },
        {
            title: '3',
            description: 'فاکتورهای معوق',
            icon: <IoIosTimer size={45} color={'#F98622'} />,
            cssStyle: 'orange'
        },
        {
            title: '26',
            description: 'فروشگاه های جدید',
            icon: <IoStorefrontOutline size={50} color={'#FFCC00'} />,
            cssStyle: 'yellow'
        },
        {
            title: '‏6.800.000 تومان',
            description: 'میزان فروش این ماه',
            icon: <FaHandHoldingUsd size={50} color={'#7B4AF1'} />,
            cssStyle: 'Purple'
        },
        {
            title: '‏12.524.000 تومان',
            description: 'پورسانت حاصل از فروش',
            icon: <FaMoneyBillWave size={50} color={'#2CB94D'} />,
            cssStyle: 'green'
        }
    ];
    return (
        <>
            <HeadDash />
            <Box BoxItem={BoxItem} />
            <MyChart />
            <BoxProductsImg/>
        </>
    );
};

export default Index;
