import React, { useEffect, useState } from 'react';
import { AiOutlineEdit, AiOutlineDelete, AiOutlineFolderView, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { getProducts } from '../../api/products';
import SearchAndBtn from '../../components/search/SearchAndBtn';
import Table from '../../components/table/table';
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;
const Index = () => {
    const [products, setProducts] = useState<
        { id: number; title: string; price: number }[] | undefined
    >();
    const headers = [
        {
            key: 'id',
            value: 'ردیف'
        },
        {
            key: 'title',
            value: 'نام محصول'
        },
        {
            key: 'price',
            value: 'تاریخ انقضا'
        },
        {
            key: 'price',
            value: 'نوع دسته بندی'
        }
    ];
    const buttons = [
        {
            title: 'Edit',
            route: '/ProductManagement/ProductsCategorization/edit',

            cssClass: 'primary',
            icon: <AiOutlineEdit />
        },
        {
            title: 'Delete',
            route: 'ProductsCategorization/delete',
            cssClass: 'secondary',
            icon: <AiOutlineDelete />
        },
        {
            title: 'View',
            route: '/ProductManagement/ProductsCategorization/viewCateg',
            cssClass: 'primary',
            icon: <AiOutlineFolderView />
        }
    ];

    const dataButtons = { title: 'افزودن فروشگاه', icon: <AiOutlinePlus />, route: '/store/addInformation' };

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);
    return (
        <Container>
            <SearchAndBtn dataButtons={dataButtons} />
            <Table headers={headers} data={products} buttons={buttons} />
        </Container>
    );
};

export default Index;
