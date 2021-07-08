import Button from '../button/button';
import { Link } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styled, { keyframes } from 'styled-components';

import Loading from '../loading/loading';

const StyledTable = styled.table`
    table {
        border: 1px solid #ccc;
        border-collapse: collapse;
    }
    thead {
        th {
            background-color: #dedede;
            padding: 10px;
            color: black;
        }
    }
    tbody td {
        padding: 10px;
        border: 1px solid #ccc;
        color: black;
    }
`;

interface TableProps {
    data: any[] | undefined;
    headers: any[];
    buttons: { title: string; route: string; cssClass: string ;icon:any}[];
}

const Table: React.FC<TableProps> = ({ data, headers, buttons }) => {
    return data ? (
        <StyledTable>
            <thead>
                <tr>
                    {headers.map((header , index) => {
                        return <th key="index">{header.value}</th>;
                    })}
                    <th> عملیات</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((row) => {
                    return (
                        <tr key={row.id}>
                     
                            {headers.map((header) => {
                                return <td>{row[header.key]}</td>;
                            })}
                            <td>
                                {buttons.map((btn) => {
                                    return (
                                        <Link to={`${btn.route}/${row.id}`}>
                                            <Button title={btn.icon} styleType={btn.cssClass}  />
                                        </Link>
                                    );
                                })}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </StyledTable>
    ) : (
        <Loading />
    );
};
export default Table;

// const person = [
//     {
//     id:1,
//     name:'John',
//     family:'Doe'
// },
// {
//     id:1,
//     name:'John',
//     family:'Doe'
// },
// {
//     id:1,
//     name:'John',
//     family:'Doe'
// }
// ]
// const headers = Object.keys(person[0])

// person.map(p=>{
//    {let row = Object.entries(p)}
//    row.map(r=>{
//     return(
//         <td>{r}</td>
//     )
//    })

// })

// headers.map(header=>{
//     return(
//         <th>{header}</th>
//     )
// })
