import VueRouter from 'vue-router';
import Products from '@/components/Products'
import Product from '@/components/Product'
import Checkout from '@/components/Checkout'
const routes = [
    {
        path: '/',
        name:'home',
        component: Products
    },
    {
        path: '/product/:id',
        name: 'product',
        component: Product,
        props: true
    },
    {
        path: '/checkout',
        name: 'checkout',
        component: Checkout,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
