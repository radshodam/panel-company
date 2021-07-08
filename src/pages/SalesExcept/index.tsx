import React from 'react'
import { AiOutlineBarChart } from 'react-icons/ai';

import Box from '../../components/boxProducts/Box';



const Index:React.FC = () => {
    const BoxItem = [
        {
            title: '18.994.000 تومان',
            description: 'فروشگاه 1',
            icon: <AiOutlineBarChart size={50} color={'#4791FF'} />,
            cssStyle: 'blue'
        },
        {
            title: '‏15.000.000 تومان',
            description: 'فروشگاه 2',
            icon: <AiOutlineBarChart size={50} color={'#FF2366'} />,
            cssStyle: 'red',
         
        },
        {
            title: '‏12.524.000 تومان',
            description: 'فروشگاه 3',
            icon: <AiOutlineBarChart size={50} color={'#2CB94D'} />,
            cssStyle: 'green'
        },
        {
            title: '20.524.000 تومان',
            description: 'فروشگاه 4',
            icon: <AiOutlineBarChart size={50} color={'#4791FF'} />,
            cssStyle: 'blue'
        },
        {
            title: '‏15.000.000 تومان',
            description: 'فروشگاه 4',
            icon: <AiOutlineBarChart size={50} color={'#FF2366'} />,
            cssStyle: 'red',
         
        },
        {
            title: '‏12.524.000 تومان',
            description: 'فروشگاه 6',
            icon: <AiOutlineBarChart size={50} color={'#2CB94D'} />,
            cssStyle: 'green'
        },
        {
            title: '56.524.000 تومان',
            description: 'فروشگاه 7',
            icon: <AiOutlineBarChart size={50} color={'#4791FF'} />,
            cssStyle: 'blue'
        },
        {
            title: '‏15.000.000 تومان',
            description: 'فروشگاه 8',
            icon: <AiOutlineBarChart size={50} color={'#FF2366'} />,
            cssStyle: 'red',
         
        },
        {
            title: '‏12.524.000 تومان',
            description: 'فروشگاه 9',
            icon: <AiOutlineBarChart size={50} color={'#2CB94D'} />,
            cssStyle: 'green'
        },
    ];

    
    return (
        <div>
          <Box BoxItem={BoxItem} />
        </div>
    )
}

export default Index
