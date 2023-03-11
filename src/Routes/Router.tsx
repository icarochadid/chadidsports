import {Route, Routes, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { CreateAcount } from '../Pages/LoginPage/CreateAcount'
import { Login } from '../Pages/LoginPage/Login'
import { MenuPage } from '../Pages/MenuPage/Index'
import { ProductPage } from '../Pages/ProductsPage'
export function Router() {
    const router = createBrowserRouter([
        {
            path: '/criarconta',
            element: (<CreateAcount/>) 
           
        },
        {
            path: '/',
            element: (<Login/>)
        },
        {
            path: '/menu',
            element: (<MenuPage/>)
        },
        {
            path: '/produtos',
            element: (<ProductPage/>)
        }
    ])
    return (
       <RouterProvider router={router}/>
    )
}