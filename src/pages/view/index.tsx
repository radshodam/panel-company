import React, { FC } from 'react';
import { AiOutlineFolderView, AiOutlineSend } from 'react-icons/ai';
import { addProduct } from '../../api/products';
import Form from '../../components/form/form';

const inputs = [
    {
        label: 'آپلود عکس :',
        placeholder: 'product name',
        type: 'file',
        name: 'title'
    },
    {
        label: 'عنوان محصول :',
        placeholder: 'product name',
        type: 'text',
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
        type: 'number',
        name: 'price'
    },
    {
        label: 'محاسبه سود :',
        placeholder: 'product family',
        type: 'number',
        name: 'price'
    },
    {
        label: 'مشخصات محصول :',
        placeholder: 'مشخصات محصول',
        type: 'textarea',
        name: 'image'
    },
    {
        label: 'توضیحات درباره ی محصول :',
        placeholder: 'توضیحات درباره ی محصول',
        type: 'textarea',
        name: 'image'
    },
    {
        label: ' دسته بندی محصول :',
        placeholder: 'product name',
        type: 'select',
        name: 'title'
    },
    {
        label: ' برند کالا :',
        placeholder: 'product name',
        type: 'select',
        name: 'title'
    },
    {
        label: 'تاریخ انقضای محصول :',
        placeholder: 'product image address',
        type: 'text',
        name: 'image'
    },
    {
        label: 'تاریخ انقضای محصول :',
        placeholder: 'product image address',
        type: 'text',
        name: 'image'
    },
    {
        label: 'قیمت برای فروشگاه :',
        placeholder: 'swlected',
        type: 'number',
        name: 'select'
    }
];
const buttons = [
    {
        title: 'انصراف',
        cssClass: 'secondary',
        icon: <AiOutlineSend />,
        route:"/"
    },
    {
        title: 'ثبت محصول',
        cssClass: 'primary',
        icon: <AiOutlineFolderView />,
        route:"/"
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
