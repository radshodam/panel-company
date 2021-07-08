import { useState, useEffect } from 'react';
import Table from '../table/table';
import styled from 'styled-components';
import { getProducts } from '../../api/products';
import { AiOutlineDelete, AiOutlineEdit, AiOutlineFolderView, AiOutlinePlus } from 'react-icons/ai';
import SearchAndBtn  from '../../components/search/SearchAndBtn';

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
            value: 'عنوان'
        },
        {
            key: 'price',
            value: 'قیمت خرید (ریال)'
        },
        {
            key: 'price',
            value: 'قیمت فروش (ریال)'
        }
    ];
    const buttons = [
        {
            title: 'Edit',
            route: '/ProductManagement/products/edit',
            cssClass: 'primary',
            icon: <AiOutlineEdit />
        },
        {
            title: 'Delete',
            route: 'products/delete',
            cssClass: 'secondary',
            icon: <AiOutlineDelete />
        },
        {
            title: 'View',
            route: 'products/view',
            cssClass: 'primary',
            icon: <AiOutlineFolderView />
        }
    ];
    const dataButtons = { title: 'افزودن محصول', icon: <AiOutlinePlus />, route: '/ProductManagement/products/view/add' };

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <Container>
            <SearchAndBtn dataButtons={dataButtons} />
            <Table data={products} headers={headers} buttons={buttons} />
        </Container>
    );
};
export default Index;
