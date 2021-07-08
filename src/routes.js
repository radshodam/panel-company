const routes = [
    {
        name: 'ProductManagement',
        path: '/ProductManagement',
        containerPath: './pages/dashboard/index'
    },
    {
        name: 'NewProductPegistration',
        path: '/ProductManagement/NewProductPegistration',
        containerPath: './pages/NewProductPegistration/index'
    },
    {
        name: 'ProductTracking',
        path: '/ProductManagement/ProductTracking',
        containerPath: './pages/ProductTracking/index'
    },
    {
        name: 'ProductsCategorization',
        path: '/ProductManagement/ProductsCategorization',
        containerPath: './pages/ProductsCategorization/index'
    },
    {
        name: 'reporting',
        path: '/reporting',
        containerPath: './pages/reporting/index'
    },
    {
        name: 'reporting',
        path: '/reporting/StoreList',
        containerPath: './pages/StoreList/index'
    },
    {
        name: 'reporting',
        path: '/reporting/Inventory',
        containerPath: './pages/Inventory/index'
    },

    {
        name: 'accounting',
        path: '/accounting',
        containerPath: './pages/accounting/index'
    },
    {
        name: 'accounting',
        path: '/accounting/OverallSales',
        containerPath: './pages/OverallSales/index'
    },
    {
        name: 'accounting',
        path: '/accounting/SalesExcept',
        containerPath: './pages/SalesExcept/index'
    },
    {
        name: 'accounting',
        path: '/accounting/ProfitFromSales',
        containerPath: './pages/ProfitFromSales/index'
    },
    //

    {
        name: 'StoreInformation',
        path: '/store/StoreInformation',
        containerPath: './pages/StoreInformation/index'
    },
    {
        name: 'AddStoreInformation',
        path: '/store/addInformation',
        containerPath: './pages/StoreInformation/addInformation'
    },
    {
        name: 'references',
        path: '/store/references',
        containerPath: './pages/References/index'
    },
    {
        name: 'references',
        path: '/store/references/addReferences',
        containerPath: './pages/addReferences/index'
    },
    {
        name: 'accounting',
        path: '/accounting/ProfitFromSales',
        containerPath: './pages/ProfitFromSales/index'
    },
    //
    //

    {
        name: 'DiscountCode',
        path: '/DiscountCode',
        containerPath: './pages/disCountCode/index'
    },
    //
    {
        name: 'setting',
        path: '/setting',
        containerPath: './pages/setting/index'
    },
    {
        name: 'Support',
        path: '/Support',
        containerPath: './pages/Support/index'
    },
    {
        name: 'RulesAndGuidelines',
        path: '/RulesAndGuidelines',
        containerPath: './pages/RulesAndGuidelines/index'
    },
    {
        name: 'edit',
        path: '/ProductManagement/products/edit/:id',
        containerPath: './pages/edit/index'
    },
    {
        name: 'view',
        path: '/ProductManagement/products/view/:id',
        containerPath: './pages/view/index'
    },
    {
        name: 'edit',
        path: '/ProductManagement/ProductsCategorization/edit/:id',
        containerPath: './pages/edit/index'
    },
    {
        name: 'view',
        path: '/ProductManagement/ProductsCategorization/viewCateg/:id',
        containerPath: './pages/viewCateg/index'
    }
];
export default routes;
