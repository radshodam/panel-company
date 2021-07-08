import React, { FC, useEffect, useState } from 'react';
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
const Index: FC = () => {
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
            value: 'مرجوعات '
        },
        {
            key: 'price',
            value: 'عدم فروش محصول'
        },
        {
            key: 'price',
            value: 'تاریخ انقضا'
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
    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    const dataButtons = {
        title: 'افزودن مرجوعی',
        icon: <AiOutlinePlus />,
        route: '/store/references/addReferences'
    };

    return (
        <Container>
            <SearchAndBtn dataButtons={dataButtons} />
            <Table data={products} headers={headers} buttons={buttons} />
        </Container>
    );
};

export default Index;
