import Home from '../views/home.js';
import Products from '../views/Products.js';
import ProductDetail from '../views/ProductDetail.js';
import Service from '../views/Service.js';

export const ROUTE_BASE = 'sampleapp.html#';
export const ROUTES = [
    { path: '/home', view: Home },
    { path: '/products', view: Products },
    { path: '/productDetail/:id', view: ProductDetail },
    { path: '/service', view: Service }
];