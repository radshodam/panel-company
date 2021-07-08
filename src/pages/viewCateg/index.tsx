import React, { FC } from 'react';
import { AiOutlineFolderView, AiOutlineSend } from 'react-icons/ai';
import { addProduct } from '../../api/products';
import Form from '../../components/form/form';

const inputs = [
    

    {
        label: 'نام کالا :',
        placeholder: 'product name',
        type: 'select',
        name: 'title'
    },
    {
        label: 'برند :',
        placeholder: 'product name',
        type: 'text',
        name: 'title'
    },
    {
        label: 'نوع دسته بندی :',
        placeholder: 'product name',
        type: 'select',
        name: 'title'
    }
];
const buttons = [
    {
        title: 'انصراف',
        cssClass: 'secondary',
        icon: <AiOutlineSend />
    },
    {
        title: 'ثبت محصول',
        cssClass: 'primary',
        icon: <AiOutlineFolderView />
    }
];
const index: FC = () => {
    const handleSubmit = (payload: Object) => {
        addProduct(payload).then((res) => {
            alert('product added!');
        });
    };
    return <Form inputs={inputs} onSubmit={handleSubmit} buttons={buttons} />;
};

export default index;
