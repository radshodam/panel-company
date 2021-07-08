import React, { FC } from 'react';
import { AiOutlineSend, AiOutlineFolderView } from 'react-icons/ai';
import styled from 'styled-components';
import { addProduct } from '../../api/products';
import Form from '../../components/form/form';
const ParStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const inputs = [
    {
        label: 'کد تخفیف :',
        placeholder: 'product name',
        type: 'text',
        name: 'title'
    },
    {
        label: 'میزان خرید :',
        placeholder: 'product name',
        type: 'text',
        name: 'title'
    },
    {
        label: 'کالای جدید :',
        placeholder: 'product name',
        type: 'text',
        name: 'title'
    },
    {
        label: 'مناسبت :',
        placeholder: 'product family',
        type: 'text',
        name: 'price'
    },
    {
        label: 'اسم شرکت :',
        placeholder: 'مشخصات محصول',
        type: 'textarea',
        name: 'image'
    },
    {
        label: 'پایان تاریخ انقضا :',
        placeholder: 'product family',
        type: 'date',
        name: 'price'
    }
];
const buttons = [
    {
        title: 'انصراف',
        cssClass: 'secondary',
        icon: <AiOutlineSend />,
        route: '/'
    },
    {
        title: 'ثبت محصول',
        cssClass: 'primary',
        icon: <AiOutlineFolderView />,
        route: '/'
    }
];
const Index: FC = () => {
    const handleSubmit = (payload: Object) => {
        addProduct(payload).then((res) => {
            alert('product added!');
        });
    };
    return (
        <ParStyle>
            <Form inputs={inputs} onSubmit={handleSubmit} buttons={buttons} />
        </ParStyle>
    );
};

export default Index;
