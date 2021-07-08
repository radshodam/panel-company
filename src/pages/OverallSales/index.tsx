import { AiOutlineBarChart } from 'react-icons/ai';
import { BiTaskX } from 'react-icons/bi';
import { FaMoneyBillWave } from 'react-icons/fa';
import Box from '../../components/boxProducts/Box';

const Index:React.FC = () => {
    const BoxItem = [
        {
            title: '15',
            description: 'فروش کلی',
            icon: <AiOutlineBarChart size={50} color={'#4791FF'} />,
            cssStyle: 'blue'
        },
        {
            title: 'نمایش',
            description: 'نمایش جزئیات فروش به فروشگاه ها',
            icon: <BiTaskX size={50} color={'#FF2366'} />,
            cssStyle: 'red',
         
        },
        {
            title: '‏12.524.000 تومان',
            description: 'پورسانت حاصل از فروش',
            icon: <FaMoneyBillWave size={50} color={'#2CB94D'} />,
            cssStyle: 'green'
        }
    ];

    return (
        <div>
            <Box BoxItem={BoxItem} />
        </div>
    );
};

export default Index;
