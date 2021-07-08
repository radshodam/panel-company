import {
    AiOutlineContainer,
    AiOutlineDollarCircle,
    AiOutlineHome,

} from 'react-icons/ai';
import { FaBuffer, FaDollyFlatbed, FaFileInvoiceDollar, FaReceipt, FaRegClipboard, FaRegClone, FaStoreAlt, FaTasks, FaThList } from 'react-icons/fa';
import { SidebarItem } from '../models/SidebarItem';
import { IoCalculatorOutline, IoChevronDownOutline, IoChevronUpOutline, IoReceiptOutline, IoStorefrontOutline } from 'react-icons/io5';
import { VscBook, VscReferences, VscSettingsGear } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";


export const SidebarData: SidebarItem[] = [
    {
        title: 'داشبورد',
        path: '/',
        icon: <AiOutlineHome />
    },
    {
        title: 'مدیریت محصولات',
        path: '#',
        icon: <FaBuffer />,
        iconClosed: <IoChevronDownOutline />,
        iconOpened: <IoChevronUpOutline />,
        subnav: [
            {
                title: 'ثبت محصول جدید',
                path: '/ProductManagement/NewProductPegistration',
                icon: <FaReceipt />
            },
            {
                title: 'پیگیری محصول',
                path: '/ProductManagement/ProductTracking',
                icon: <FaTasks />
            },
            {
                title: 'دسته بندی محصولات',
                path: '/ProductManagement/ProductsCategorization',
                icon: <FaThList />
            }
        ]
    },
    {
        title: 'گزارش گیری',
        path: '#',
        icon: <AiOutlineContainer />,
        iconClosed: <IoChevronDownOutline />,
        iconOpened: <IoChevronUpOutline />,
        subnav: [
            {
                title: 'لیست فروشگاه',
                path: '/reporting/StoreList',
                icon: <IoReceiptOutline />
            },
            {
                title: 'موجودی کالا',
                path: '/reporting/Inventory',
                icon: <FaDollyFlatbed />
            }
        ]
    },
    {
        title: 'حسابداری',
        path: '#',
        icon: <IoCalculatorOutline />,
        iconClosed: <IoChevronDownOutline />,
        iconOpened: <IoChevronUpOutline />,
        subnav: [
            {
                title: 'فروش کلی',
                path: '/accounting/OverallSales',
                icon: <FaRegClone />
            },
            {
                title: 'فروش به جزو هر فروشگاه',
                path: '/accounting/SalesExcept',
                icon: <FaRegClipboard />
            },
            {
                title: 'سود حاصل از فروش',
                path: '/accounting/ProfitFromSales',
                icon: <AiOutlineDollarCircle />
            }
        ]
    },
    {
        title: 'فروشگاه',
        path: '#',
        icon: <IoStorefrontOutline />,
        iconClosed: <IoChevronDownOutline />,
        iconOpened: <IoChevronUpOutline />,
        subnav: [
            {
                title: 'اطلاعات فروشگاه',
                path: '/store/StoreInformation',
                icon: <FaStoreAlt />
            },
            {
                title: 'مرجوعات',
                path: '/store/references',
                icon: <VscReferences />
            }
        ]
    },
    {
        title: 'ایجاد کد تخفیف',
        path: '/DiscountCode',
        icon: <FaFileInvoiceDollar />
    },
    {
        title: 'تنظیمات',
        path: '/setting',
        icon: <VscSettingsGear />
    },
    {
        title: 'پشتیبانی',
        path: '/Support',
        icon: <BiSupport />
    },
    {
        title: 'قوانین وراهنما',
        path: '/RulesAndGuidelines',
        icon: <VscBook />
    }
];
