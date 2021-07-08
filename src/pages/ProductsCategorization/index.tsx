import { useState, useEffect } from 'react';
import Table from '../../components/table/table';
import styled from 'styled-components';
import { getProducts } from '../../api/products';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineFolderView } from 'react-icons/ai';
import BtnCategSearch from '../../components/button/BtnCategSearch';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const Index: React.FC = () => {
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

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <Container >
            <BtnCategSearch/>
            <Table data={products} headers={headers} buttons={buttons} />
        </Container>
    );
};
export default Index;
