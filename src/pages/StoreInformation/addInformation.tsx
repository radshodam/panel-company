import React from 'react';
import { AiOutlineSend, AiOutlineFolderView } from 'react-icons/ai';
import styled from 'styled-components';
import { addProduct } from '../../api/products';
import Form from '../../components/form/form';

const ParStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const addInformation: React.FC = () => {
    const inputs = [
        {
            label: 'نام فروشگاه :',
            placeholder: 'product name',
            type: 'select',
            name: 'title'
        },
        {
            label: 'نام کالا :',
            placeholder: 'product name',
            type: 'select',
            name: 'title'
        },
        {
            label: 'نوع دسته بندی :',
            placeholder: 'product name',
            type: 'select',
            name: 'title'
        },
        {
            label: 'قیمت کالا برای شرکت :',
            placeholder: 'product family',
            type: 'text',
            name: 'price'
        },
        {
            label: 'قیمت برای فروشگاه :',
            placeholder: 'مشخصات محصول',
            type: 'text',
            name: 'image'
        },
        {
            label: 'تاریخ انقضا :',
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

export default addInformation;
