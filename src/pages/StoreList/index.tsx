import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '../../api/products';
import Table from '../../components/table/table2';

const ParentStyle = styled.div`
    display: flex;
    justify-content: center;
    padding: 25px;
`;
const StyleCateg = styled.select`
    width: 320px;
    height: 45px;
    border-radius: 25px;
    border: none;
    box-shadow: 0px 3px 6px grey;
    padding: 5px 21px;
    outline: none;
    margin: 40px;

    &:focus {
        border: 1px solid #afafaf;
    }
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
            value: 'نام محصول'
        }
        // {
        //     key: 'price',
        //     value: 'تاریخ انقضا'
        // },
    ];

    useEffect(() => {
        getProducts().then((result) => {
            setProducts(result);
        });
    }, []);

    return (
        <>
            <StyleCateg className="font" id="site-select" name="se" placeholder="دسته بندی محصولات">
                <option value="optionA">لیست جدیدترین فروشگاه ها</option>
                <option value="optionB">گزارش گیری از موجودی کالاها</option>
                <option value="optionC">گزارش گیری از کسری ها</option>
            </StyleCateg>
            <ParentStyle>
                <Table headers={headers} data={products} />
            </ParentStyle>
            \
        </>
    );
};

export default Index;
